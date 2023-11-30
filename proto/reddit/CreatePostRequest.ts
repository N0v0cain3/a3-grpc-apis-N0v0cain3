// Original file: proto/reddit.proto

import type { Post as _reddit_Post, Post__Output as _reddit_Post__Output } from '../reddit/Post';

export interface CreatePostRequest {
  'post'?: (_reddit_Post | null);
}

export interface CreatePostRequest__Output {
  'post': (_reddit_Post__Output | null);
}
