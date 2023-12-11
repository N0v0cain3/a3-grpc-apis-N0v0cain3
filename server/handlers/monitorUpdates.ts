import { posts, comments } from '../../db/db.ts' 
import * as grpc from '@grpc/grpc-js'

export const monitorUpdates = (call,callback) =>{

    call.on('data', (request) => {
        console.log("REERE",request)
        // Handle incoming requests which can be either a post or comment ID
        if (request.postId) {
          // Logic to monitor updates for the post
          // For example, fetching the post's score and sending it in the response
          let post = posts.find(p => p.id === request.postId);
          if (post) {
            call.write({ updates: [{ postId: post.id, newScore: post.score }] });
          }
        } else if (request.commentId) {
          // Similar logic for comments
          let comment = comments.find(c => c.id === request.commentId);
          if (comment) {
            call.write({ updates: [{ commentId: comment.id, newScore: comment.score }] });
          }
        }
      });
    
      call.on('end', () => {
        call.end();
      });

}