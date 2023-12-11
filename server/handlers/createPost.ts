import * as db from '../../db/db.ts'
import { status } from '@grpc/grpc-js';
import { Post, _reddit_Post_State, _reddit_Post_State__Output } from '../../proto/reddit/Post.ts';


function mapState(state: _reddit_Post_State__Output): number {
  switch (state) {
    case _reddit_Post_State.NORMAL:
      return 0;
    case _reddit_Post_State.LOCKED:
      return 1;
    case _reddit_Post_State.HIDDEN:
      return 2;
    default:
      return 0; // or throw an error
  }
}

function convertToPostState(stateNumber: number): _reddit_Post_State {
  // Logic to convert the number to the corresponding enum value
  return Object.values(_reddit_Post_State)[stateNumber];
}
export const createPost = (req, res) => {
  // console.log(req.request.post)
  try {
    const newPost = req.request.post

    // Input validation
    if (!newPost.title || !newPost.text || !newPost.author) {
      return res({
        code: status.INVALID_ARGUMENT,
        message: 'Missing required fields'
      });
    }

    const formattedPost = {
      id: db.posts.length + 1,
      title: newPost.title,
      text: newPost.text,
      video_url: newPost.videoUrl || null, // Assuming 'videoUrl' is the field name in Post__Output
      image_url: newPost.imageUrl || null, // Assuming 'imageUrl' is the field name in Post__Output
      subreddit: newPost.subreddit,
      author: newPost.author,
      score: 0,
      state: mapState(newPost.state),
      publication_date: parseInt(newPost.publicationDate)// Make sure the naming matches
    };
    // console.log(formattedPost)
    db.posts.push(formattedPost)

    const foundPost = db.posts.find(x => x.id === db.posts.length);

    if (!foundPost) {
      throw new Error('Post not found after creation');
    }

    const responsePost: Post = {
      id: foundPost.id,
      title: foundPost.title,
      text: foundPost.text,
      videoUrl: foundPost.video_url || null, // Convert to the correct format
      imageUrl: foundPost.image_url || null, // Convert to the correct format
      subreddit: foundPost.subreddit,
      author: foundPost.author,
      score: foundPost.score,
      state: convertToPostState(foundPost.state),
      publicationDate: foundPost.publication_date // Convert to Unix timestamp
    };
    res(null, { newPost: responsePost })
  } catch (error) {
    console.error('Error in createPost:', error.message);
    res({
      code: status.INTERNAL,
      message: 'Internal server error'
    });
  }
}