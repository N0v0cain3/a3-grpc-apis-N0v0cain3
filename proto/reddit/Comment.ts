// Original file: proto/reddit.proto

import type { Long } from '@grpc/proto-loader';

// Original file: proto/reddit.proto

export const _reddit_Comment_CommentState = {
  NORMAL: 'NORMAL',
  HIDDEN: 'HIDDEN',
} as const;

export type _reddit_Comment_CommentState =
  | 'NORMAL'
  | 0
  | 'HIDDEN'
  | 1

export type _reddit_Comment_CommentState__Output = typeof _reddit_Comment_CommentState[keyof typeof _reddit_Comment_CommentState]

export interface Comment {
  'id'?: (number);
  'author'?: (string);
  'text'?: (string);
  'score'?: (number);
  'state'?: (_reddit_Comment_CommentState);
  'publicationDate'?: (number | string | Long);
  'postId'?: (number);
  'replyTo'?: (number);
}

export interface Comment__Output {
  'id': (number);
  'author': (string);
  'text': (string);
  'score': (number);
  'state': (_reddit_Comment_CommentState__Output);
  'publicationDate': (string);
  'postId': (number);
  'replyTo': (number);
}
