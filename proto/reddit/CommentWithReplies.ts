// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';
import type { Temp as _reddit_Temp, Temp__Output as _reddit_Temp__Output } from '../reddit/Temp';

export interface CommentWithReplies {
  'comment'?: (_reddit_Comment | null);
  'replies'?: (_reddit_Temp)[];
}

export interface CommentWithReplies__Output {
  'comment': (_reddit_Comment__Output | null);
  'replies': (_reddit_Temp__Output)[];
}
