import * as db  from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

export const getPost = (call,callback) =>{
  try{
    const postId = call.request.postId;

    if (typeof postId === 'undefined') {
        // Invalid argument error
        return callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: 'postId must be provided'
        });
    }
    // Find the post by ID
    const post = db.posts.find(p => p.id === postId);
    console.log(post)
    if (post) {
      callback(null, { post: post });
    } else {
      callback({
        code: grpc.status.NOT_FOUND,
        message: 'Post not found'
      });
    } } catch (err){
      callback({
        code: grpc.status.INTERNAL,
        message: 'Internal server error'
    });
    }
}
