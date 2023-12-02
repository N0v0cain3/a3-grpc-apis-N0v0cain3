import { comments } from "../../db/db.ts";
import * as grpc from '@grpc/grpc-js'


export const topVotedComments = (call, callback) => {
    const postId = call.request.postId;
    const limit = call.request.limit;
  console.log('assdsd;,',postId,limit)
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
    console.log("response",responseComments)
  
    callback(null, { topComments: responseComments });
    
}