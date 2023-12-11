// Original file: proto/reddit.proto


export interface MonitorUpdatesRequest {
  'postId'?: (number);
  'commentId'?: (number);
  'requestType'?: "postId"|"commentId";
}

export interface MonitorUpdatesRequest__Output {
  'postId'?: (number);
  'commentId'?: (number);
  'requestType': "postId"|"commentId";
}
