// Original file: proto/reddit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateCommentRequest as _reddit_CreateCommentRequest, CreateCommentRequest__Output as _reddit_CreateCommentRequest__Output } from '../reddit/CreateCommentRequest';
import type { CreateCommentResponse as _reddit_CreateCommentResponse, CreateCommentResponse__Output as _reddit_CreateCommentResponse__Output } from '../reddit/CreateCommentResponse';
import type { CreatePostRequest as _reddit_CreatePostRequest, CreatePostRequest__Output as _reddit_CreatePostRequest__Output } from '../reddit/CreatePostRequest';
import type { CreatePostResponse as _reddit_CreatePostResponse, CreatePostResponse__Output as _reddit_CreatePostResponse__Output } from '../reddit/CreatePostResponse';
import type { ExpandCommentBranchRequest as _reddit_ExpandCommentBranchRequest, ExpandCommentBranchRequest__Output as _reddit_ExpandCommentBranchRequest__Output } from '../reddit/ExpandCommentBranchRequest';
import type { ExpandCommentBranchResponse as _reddit_ExpandCommentBranchResponse, ExpandCommentBranchResponse__Output as _reddit_ExpandCommentBranchResponse__Output } from '../reddit/ExpandCommentBranchResponse';
import type { GetPostRequest as _reddit_GetPostRequest, GetPostRequest__Output as _reddit_GetPostRequest__Output } from '../reddit/GetPostRequest';
import type { GetPostResponse as _reddit_GetPostResponse, GetPostResponse__Output as _reddit_GetPostResponse__Output } from '../reddit/GetPostResponse';
import type { GetTopCommentsRequest as _reddit_GetTopCommentsRequest, GetTopCommentsRequest__Output as _reddit_GetTopCommentsRequest__Output } from '../reddit/GetTopCommentsRequest';
import type { GetTopCommentsResponse as _reddit_GetTopCommentsResponse, GetTopCommentsResponse__Output as _reddit_GetTopCommentsResponse__Output } from '../reddit/GetTopCommentsResponse';
import type { PingRequest as _reddit_PingRequest, PingRequest__Output as _reddit_PingRequest__Output } from '../reddit/PingRequest';
import type { PongResponse as _reddit_PongResponse, PongResponse__Output as _reddit_PongResponse__Output } from '../reddit/PongResponse';
import type { VoteCommentRequest as _reddit_VoteCommentRequest, VoteCommentRequest__Output as _reddit_VoteCommentRequest__Output } from '../reddit/VoteCommentRequest';
import type { VoteCommentResponse as _reddit_VoteCommentResponse, VoteCommentResponse__Output as _reddit_VoteCommentResponse__Output } from '../reddit/VoteCommentResponse';
import type { VotePostRequest as _reddit_VotePostRequest, VotePostRequest__Output as _reddit_VotePostRequest__Output } from '../reddit/VotePostRequest';
import type { VotePostResponse as _reddit_VotePostResponse, VotePostResponse__Output as _reddit_VotePostResponse__Output } from '../reddit/VotePostResponse';

export interface RedditClient extends grpc.Client {
  CreateComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  
  GetPost(argument: _reddit_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _reddit_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _reddit_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  GetPost(argument: _reddit_GetPostRequest, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _reddit_GetPostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _reddit_GetPostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _reddit_GetPostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  getPost(argument: _reddit_GetPostRequest, callback: grpc.requestCallback<_reddit_GetPostResponse__Output>): grpc.ClientUnaryCall;
  
  PingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  PingPong(argument: _reddit_PingRequest, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  pingPong(argument: _reddit_PingRequest, callback: grpc.requestCallback<_reddit_PongResponse__Output>): grpc.ClientUnaryCall;
  
  TopVotedComments(argument: _reddit_GetTopCommentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  TopVotedComments(argument: _reddit_GetTopCommentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  TopVotedComments(argument: _reddit_GetTopCommentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  TopVotedComments(argument: _reddit_GetTopCommentsRequest, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  topVotedComments(argument: _reddit_GetTopCommentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  topVotedComments(argument: _reddit_GetTopCommentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  topVotedComments(argument: _reddit_GetTopCommentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  topVotedComments(argument: _reddit_GetTopCommentsRequest, callback: grpc.requestCallback<_reddit_GetTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  
  VoteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  
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
  CreateComment: grpc.handleUnaryCall<_reddit_CreateCommentRequest__Output, _reddit_CreateCommentResponse>;
  
  CreatePost: grpc.handleUnaryCall<_reddit_CreatePostRequest__Output, _reddit_CreatePostResponse>;
  
  ExpandCommentBranch: grpc.handleUnaryCall<_reddit_ExpandCommentBranchRequest__Output, _reddit_ExpandCommentBranchResponse>;
  
  GetPost: grpc.handleUnaryCall<_reddit_GetPostRequest__Output, _reddit_GetPostResponse>;
  
  PingPong: grpc.handleUnaryCall<_reddit_PingRequest__Output, _reddit_PongResponse>;
  
  TopVotedComments: grpc.handleUnaryCall<_reddit_GetTopCommentsRequest__Output, _reddit_GetTopCommentsResponse>;
  
  VoteComment: grpc.handleUnaryCall<_reddit_VoteCommentRequest__Output, _reddit_VoteCommentResponse>;
  
  VotePost: grpc.handleUnaryCall<_reddit_VotePostRequest__Output, _reddit_VotePostResponse>;
  
}

export interface RedditDefinition extends grpc.ServiceDefinition {
  CreateComment: MethodDefinition<_reddit_CreateCommentRequest, _reddit_CreateCommentResponse, _reddit_CreateCommentRequest__Output, _reddit_CreateCommentResponse__Output>
  CreatePost: MethodDefinition<_reddit_CreatePostRequest, _reddit_CreatePostResponse, _reddit_CreatePostRequest__Output, _reddit_CreatePostResponse__Output>
  ExpandCommentBranch: MethodDefinition<_reddit_ExpandCommentBranchRequest, _reddit_ExpandCommentBranchResponse, _reddit_ExpandCommentBranchRequest__Output, _reddit_ExpandCommentBranchResponse__Output>
  GetPost: MethodDefinition<_reddit_GetPostRequest, _reddit_GetPostResponse, _reddit_GetPostRequest__Output, _reddit_GetPostResponse__Output>
  PingPong: MethodDefinition<_reddit_PingRequest, _reddit_PongResponse, _reddit_PingRequest__Output, _reddit_PongResponse__Output>
  TopVotedComments: MethodDefinition<_reddit_GetTopCommentsRequest, _reddit_GetTopCommentsResponse, _reddit_GetTopCommentsRequest__Output, _reddit_GetTopCommentsResponse__Output>
  VoteComment: MethodDefinition<_reddit_VoteCommentRequest, _reddit_VoteCommentResponse, _reddit_VoteCommentRequest__Output, _reddit_VoteCommentResponse__Output>
  VotePost: MethodDefinition<_reddit_VotePostRequest, _reddit_VotePostResponse, _reddit_VotePostRequest__Output, _reddit_VotePostResponse__Output>
}
