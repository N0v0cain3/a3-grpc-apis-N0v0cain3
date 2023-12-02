import {comments} from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

function getTopReplies(commentId, limit) {
    return comments.filter(c => c.reply_to === commentId)
                   .sort((a, b) => b.score - a.score)
                   .slice(0, limit)
                   .map(comment => {
                    //  let hasReplies = comments.some(c => c.reply_to === comment.id);
                     return { comment };
                   });
  }

export const expandCommentBranch = (call, callback) => {
    const commentId = call.request.commentId;
    const limit = call.request.limit;
  
    console.log("here bruh",commentId)
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
    
    for(let i=0;i<repliesWithNestedReplies.length;i++){
        console.log("replies with nested ",repliesWithNestedReplies[i])

    }
    callback(null, { commentBranch: { comment: topLevelComment, replies: repliesWithNestedReplies } });
  }