import * as db from '../../db/db.ts'
import { Post, _reddit_Post_State, _reddit_Post_State__Output } from '../../proto/reddit/Post.ts';


function mapState(state: _reddit_Post_State__Output ): number {
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
export const createPost = (req,res) =>{
    // console.log(req.request.post)
    const newPost = req.request.post
    const formattedPost = {
        id: db.posts.length + 1,
        title: newPost.title,
        text: newPost.text,
        video_url: newPost.videoUrl || null, // Assuming 'videoUrl' is the field name in Post__Output
        image_url: newPost.imageUrl || null, // Assuming 'imageUrl' is the field name in Post__Output
        subreddit: newPost.subreddit,
        author: newPost.author,
        score: newPost.score,
        state: mapState(newPost.state),
        publication_date: parseInt(newPost.publicationDate)// Make sure the naming matches
      };
    // console.log(formattedPost)
    db.posts.push(formattedPost)
    console.log(db.posts)

  const responsePosts: Post[] = db.posts.map(x => {
return {
id: x.id,
title: x.title,
text: x.text,
video_url: x.video_url || null, // Convert to the correct format
image_url: x.image_url || null, // Convert to the correct format
subreddit: x.subreddit,
author: x.author,
score: x.score,
state:convertToPostState(x.state),
publication_date: x.publication_date // Convert to Unix timestamp
};
});
    res(null,{posts:responsePosts})
  }