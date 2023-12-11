// Original file: proto/reddit.proto

import type { Post as _reddit_Post, Post__Output as _reddit_Post__Output } from '../reddit/Post';

export interface CreatePostResponse {
  'newPost'?: (_reddit_Post | null);
}

export interface CreatePostResponse__Output {
  'newPost': (_reddit_Post__Output | null);
}
