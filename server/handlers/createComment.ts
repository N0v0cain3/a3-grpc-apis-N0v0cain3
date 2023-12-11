import * as db from '../../db/db.ts'
import * as grpc from '@grpc/grpc-js'

export const createComment = (req, res) => {
  // console.log(req.request.post)
  try {
    const newComment = req.request
    // Validate required fields
    if (!newComment.author || !newComment.text || !newComment.postId) {
      // Respond with an error if any required field is missing
      return res({
        code: grpc.status.INVALID_ARGUMENT,
        message: 'Missing required comment fields (author, text, postId)'
      });
    }
    console.log(newComment)
    // Create a new comment object
    const formattedComment = {
      id: db.comments.length + 1,
      author: newComment.author,
      text: newComment.text,
      score: 0, // Initialize score to 0
      state: 0, // Assuming 0 is the 'NORMAL' state
      publication_date: Math.floor(Date.now() / 1000), // Current time as Unix timestamp
      post_id: newComment.postId,
      reply_to: newComment.replyTo || null // If reply_to is not provided, set it to null
    };

    console.log(formattedComment)
    // Append to the mock database
    db.comments.push(formattedComment);

    res(null, { comment: formattedComment })
  } catch (error) {
    console.error('Error in createComment:', error.message);
    // Respond with an internal server error
    res({
      code: grpc.status.INTERNAL,
      message: 'Internal server error'
    });
  }
}