import { comments } from "../../db/db.ts";
import * as grpc from '@grpc/grpc-js'


export const voteComment = (call, callback) => {
  try {
    const commentId = call.request.commentId;
    const upvote = call.request.upvote;

    // Validate input
    if (typeof commentId === 'undefined' || typeof upvote === 'undefined') {
      // Respond with an error if any required field is missing
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'commentId and upvote must be provided'
      });
    }

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
  } catch (error) {
    console.error('Error in voteComment:', error.message);
    // Respond with an internal server error
    callback({
      code: grpc.status.INTERNAL,
      message: 'Internal server error'
    });
  }
}