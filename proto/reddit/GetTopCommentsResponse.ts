// Original file: proto/reddit.proto

import type { CommentWithRepliesInfo as _reddit_CommentWithRepliesInfo, CommentWithRepliesInfo__Output as _reddit_CommentWithRepliesInfo__Output } from '../reddit/CommentWithRepliesInfo';

export interface GetTopCommentsResponse {
  'topComments'?: (_reddit_CommentWithRepliesInfo)[];
}

export interface GetTopCommentsResponse__Output {
  'topComments': (_reddit_CommentWithRepliesInfo__Output)[];
}
