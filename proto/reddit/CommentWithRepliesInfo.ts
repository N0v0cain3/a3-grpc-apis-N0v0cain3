// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';

export interface CommentWithRepliesInfo {
  'comment'?: (_reddit_Comment | null);
  'hasReplies'?: (boolean);
}

export interface CommentWithRepliesInfo__Output {
  'comment': (_reddit_Comment__Output | null);
  'hasReplies': (boolean);
}
