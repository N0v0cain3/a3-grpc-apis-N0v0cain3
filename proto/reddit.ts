import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { RedditClient as _reddit_RedditClient, RedditDefinition as _reddit_RedditDefinition } from './reddit/Reddit';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  reddit: {
    Comment: MessageTypeDefinition
    CreatePostRequest: MessageTypeDefinition
    CreatePostResponse: MessageTypeDefinition
    PingRequest: MessageTypeDefinition
    PongResponse: MessageTypeDefinition
    Post: MessageTypeDefinition
    Reddit: SubtypeConstructor<typeof grpc.Client, _reddit_RedditClient> & { service: _reddit_RedditDefinition }
    Subreddit: MessageTypeDefinition
    User: MessageTypeDefinition
    VotePostRequest: MessageTypeDefinition
    VotePostResponse: MessageTypeDefinition
  }
}

