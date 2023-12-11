import { comments } from "../../db/db.ts";
import * as grpc from '@grpc/grpc-js'


export const topVotedComments = (call, callback) => {

  try {
    const postId = call.request.postId;
    const limit = call.request.limit;
    console.log('id,limit', postId, limit)

    // Validate input
    if (typeof postId === 'undefined' || typeof limit === 'undefined' || limit < 1) {
      // Respond with an error if any required field is missing or invalid
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'postId and a positive limit must be provided'
      });
    }

    // Filter comments for the given post and sort by score
    let topComments = comments.filter(c => c.post_id === postId)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
    console.log(topComments)
    // Check for replies and map to CommentWithRepliesInfo
    let responseComments = topComments.map(comment => {
      let hasReplies = comments.some(c => c.reply_to === comment.id);
      return { comment, hasReplies: hasReplies };
    });
    console.log("response", responseComments)

    callback(null, { topComments: responseComments });
  } catch (error) {
    console.error('Error in topVotedComments:', error.message);
    // Respond with an internal server error
    callback({
      code: grpc.status.INTERNAL,
      message: 'Internal server error'
    });
  }

}