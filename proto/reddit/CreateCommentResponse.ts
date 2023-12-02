// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';

export interface CreateCommentResponse {
  'comment'?: (_reddit_Comment | null);
}

export interface CreateCommentResponse__Output {
  'comment': (_reddit_Comment__Output | null);
}
