// Original file: proto/reddit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePostRequest as _reddit_CreatePostRequest, CreatePostRequest__Output as _reddit_CreatePostRequest__Output } from '../reddit/CreatePostRequest';
import type { CreatePostResponse as _reddit_CreatePostResponse, CreatePostResponse__Output as _reddit_CreatePostResponse__Output } from '../reddit/CreatePostResponse';
import type { PingRequest as _reddit_PingRequest, PingRequest__Output as _reddit_PingRequest__Output } from '../reddit/PingRequest';
import type { PongResponse as _reddit_PongResponse, PongResponse__Output as _reddit_PongResponse__Output } from '../reddit/PongResponse';
import type { VotePostRequest as _reddit_VotePostRequest, VotePostRequest__Output as _reddit_VotePostRequest__Output } from '../reddit/VotePostRequest';
import type { VotePostResponse as _reddit_VotePostResponse, VotePostResponse__Output as _reddit_VotePostResponse__Output } from '../reddit/VotePostResponse';

export interface RedditClient extends grpc.Client {
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  
  PingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  
  VotePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RedditHandlers extends grpc.UntypedServiceImplementation {
  CreatePost: grpc.handleUnaryCall<_reddit_CreatePostRequest__Output, _reddit_CreatePostResponse>;
  
  PingPong: grpc.handleUnaryCall<_reddit_PingRequest__Output, _reddit_PongResponse>;
  
  VotePost: grpc.handleUnaryCall<_reddit_VotePostRequest__Output, _reddit_VotePostResponse>;
  
}

export interface RedditDefinition extends grpc.ServiceDefinition {
  CreatePost: MethodDefinition<_reddit_CreatePostRequest, _reddit_CreatePostResponse, _reddit_CreatePostRequest__Output, _reddit_CreatePostResponse__Output>
  PingPong: MethodDefinition<_reddit_PingRequest, _reddit_PongResponse, _reddit_PingRequest__Output, _reddit_PongResponse__Output>
  VotePost: MethodDefinition<_reddit_VotePostRequest, _reddit_VotePostResponse, _reddit_VotePostRequest__Output, _reddit_VotePostResponse__Output>
}
