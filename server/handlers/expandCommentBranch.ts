import { comments } from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

function getTopReplies(commentId, limit) {
  return comments.filter(c => c.reply_to === commentId)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(comment => {
      return { comment };
    });
}

export const expandCommentBranch = (call, callback) => {

  try {
    const commentId = call.request.commentId;
    const limit = call.request.limit;

    // Validate input
    if (typeof commentId === 'undefined' || typeof limit === 'undefined' || limit < 1) {
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'commentId and a positive limit must be provided'
      });
    }

    // Get the top-level comment
    let topLevelComment = comments.find(c => c.id === commentId);
    //   { id: 1, author: "userA", text: "Top-level comment 1", score: 6, state: 0, publication_date: 1633400000, post_id: 1, reply_to: null },
    console.log(topLevelComment)
    if (!topLevelComment) {
      callback({
        code: grpc.status.NOT_FOUND,
        details: 'Comment not found'
      });
      return;
    }

    // Get top replies for the top-level comment
    let topReplies = getTopReplies(commentId, limit);

    // Get top replies for each of the top replies
    let repliesWithNestedReplies = topReplies.map(reply => {
      return {
        comment: reply.comment,
        replies: getTopReplies(reply.comment.id, limit)
      };
    });

    callback(null, { commentBranch: { comment: topLevelComment, replies: repliesWithNestedReplies } });
  } catch (error) {
    console.error('Error in expandCommentBranch:', error.message);
    callback({
      code: grpc.status.INTERNAL,
      message: 'Internal server error'
    });
  }
}