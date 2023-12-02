// Original file: proto/reddit.proto


export interface CreateCommentRequest {
  'author'?: (string);
  'text'?: (string);
  'postId'?: (number);
  'replyTo'?: (number);
}

export interface CreateCommentRequest__Output {
  'author': (string);
  'text': (string);
  'postId': (number);
  'replyTo': (number);
}
