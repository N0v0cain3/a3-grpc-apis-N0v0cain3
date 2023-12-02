import * as db  from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

export const getPost = (call,callback) =>{
    const postId = call.request.postId;
  console.log(postId)
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
    }
}
