// Original file: proto/reddit.proto


export interface UpdateScore {
  'postId'?: (number);
  'commentId'?: (number);
  'newScore'?: (number);
  'entityId'?: "postId"|"commentId";
}

export interface UpdateScore__Output {
  'postId'?: (number);
  'commentId'?: (number);
  'newScore': (number);
  'entityId': "postId"|"commentId";
}
