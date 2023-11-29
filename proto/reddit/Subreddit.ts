// Original file: proto/reddit.proto


// Original file: proto/reddit.proto

export const _reddit_Subreddit_Visibility = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  HIDDEN: 'HIDDEN',
} as const;

export type _reddit_Subreddit_Visibility =
  | 'PUBLIC'
  | 0
  | 'PRIVATE'
  | 1
  | 'HIDDEN'
  | 2

export type _reddit_Subreddit_Visibility__Output = typeof _reddit_Subreddit_Visibility[keyof typeof _reddit_Subreddit_Visibility]

export interface Subreddit {
  'name'?: (string);
  'status'?: (_reddit_Subreddit_Visibility);
  'tags'?: (string)[];
}

export interface Subreddit__Output {
  'name': (string);
  'status': (_reddit_Subreddit_Visibility__Output);
  'tags': (string)[];
}
