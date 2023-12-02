// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';
import type { CommentWithReplies as _reddit_CommentWithReplies, CommentWithReplies__Output as _reddit_CommentWithReplies__Output } from '../reddit/CommentWithReplies';

export interface CommentBranch {
  'comment'?: (_reddit_Comment | null);
  'replies'?: (_reddit_CommentWithReplies)[];
}

export interface CommentBranch__Output {
  'comment': (_reddit_Comment__Output | null);
  'replies': (_reddit_CommentWithReplies__Output)[];
}
