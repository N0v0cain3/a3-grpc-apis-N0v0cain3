import * as db from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

export const votePost = (call, callback) => {
  try {
    const postId = call.request.postId;
    const upvote = call.request.upvote;

    if (typeof postId === 'undefined' || typeof upvote === 'undefined') {
      // Invalid argument error
      return callback({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'postId and upvote must be provided'
      });
    }
    console.log(postId, upvote)
    // Find the post by ID
    const post = db.posts.find(p => p.id === postId);

    console.log(post)
    if (post) {
      // Update the score
      post.score += upvote ? 1 : -1;
      console.log(post.score)
      // Send back the response with the new score
      callback(null, { newScore: post.score });
    } else {
      // Post not found
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'Post not found'
      });
    }
  } catch (error) {
    console.error('Error in votePost:', error.message);
    // Internal server error
    callback({
      code: grpc.status.INTERNAL,
      message: 'Internal server error'
    });
  }
}
