import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/reddit';
import { RedditHandlers } from '../proto/reddit/Reddit';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createPost } from './handlers/createPost.ts';
import { votePost } from './handlers/votePost.ts';
import { getPost } from './handlers/getPost.ts';
import { Post, _reddit_Post_State, _reddit_Post_State__Output } from '../proto/reddit/Post.ts'
import { createComment } from './handlers/createComment.ts'
import { voteComment } from './handlers/voteComment.ts'
import { topVotedComments } from './handlers/topVotedComments.ts'
import { expandCommentBranch } from './handlers/expandCommentBranch.ts'
import { monitorUpdates } from './handlers/monitorUpdates.ts'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_FILE = '../proto/reddit.proto';
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE));
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const redditPackage = grpcObj.reddit;

// Default values
let PORT = 9000;
let HOST = '0.0.0.0';

// Parsing command line arguments
process.argv.forEach((val, index, array) => {
  if (val === '--port' && array[index + 1]) {
    PORT = parseInt(array[index + 1]);
  }
  if (val === '--host' && array[index + 1]) {
    HOST = array[index + 1];
  }
});

function getServer() {
  const server = new grpc.Server();
  server.addService(redditPackage.Reddit.service, {
    "CreatePost": createPost,
    "VotePost": votePost,
    "GetPost":getPost,
    "CreateComment":createComment,
    "VoteComment":voteComment,
    "TopVotedComments":topVotedComments,
    "ExpandCommentBranch":expandCommentBranch,
    "MonitorUpdates":monitorUpdates
  } as RedditHandlers);
  return server;
}

function main() {
  const server = getServer();

  server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Your server has started on ${HOST}:${port}`);
    server.start();
  });
}

main();
