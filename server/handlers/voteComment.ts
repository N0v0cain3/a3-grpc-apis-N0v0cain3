import { comments } from "../../db/db.ts";
import * as grpc from '@grpc/grpc-js'


export const voteComment = (call, callback) => {
    const commentId = call.request.commentId;
    const upvote = call.request.upvote;
    // Find the comment by ID
    const comment = comments.find(c => c.id === commentId);
    if (comment) {
      // Update the score based on upvote/downvote
      comment.score += upvote ? 1 : -1;
  
      // Send back the response with the new score
      callback(null, { newScore: comment.score });
    } else {
      // Comment not found
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'Comment not found'
      });
    }
  }