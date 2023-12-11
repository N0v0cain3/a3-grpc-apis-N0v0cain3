import { posts, comments } from '../../db/db.ts';
import * as grpc from '@grpc/grpc-js';

export const monitorUpdates = (call, callback) => {

    call.on('data', (request) => {
        // Handle incoming requests which can be either a post or comment ID
        if (request.postId) {
            // Logic to monitor updates for the post
            let post = posts.find(p => p.id === request.postId);
            if (post) {
                call.write({ updates: [{ postId: post.id, newScore: post.score }] });
            } else {
                // Handle case where post is not found
                call.write({
                    updates: [],
                    error: {
                        code: grpc.status.NOT_FOUND,
                        message: `Post with ID ${request.postId} not found`
                    }
                });
            }
        } else if (request.commentId) {
            // Similar logic for comments
            let comment = comments.find(c => c.id === request.commentId);
            if (comment) {
                call.write({ updates: [{ commentId: comment.id, newScore: comment.score }] });
            } else {
                // Handle case where comment is not found
                call.write({
                    updates: [],
                    error: {
                        code: grpc.status.NOT_FOUND,
                        message: `Comment with ID ${request.commentId} not found`
                    }
                });
            }
        }
    });

    call.on('end', () => {
        call.end();
    });

    call.on('error', (error) => {
        console.error('Error in monitorUpdates:', error.message);
        // Handle stream errors here
        call.end();
    });
};
