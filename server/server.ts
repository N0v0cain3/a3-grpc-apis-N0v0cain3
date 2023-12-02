import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/reddit'
import{RedditHandlers} from '../proto/reddit/Reddit'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as db from '../db/db.ts' 
import { createPost } from './handlers/createPost.ts'
import { Post, _reddit_Post_State, _reddit_Post_State__Output } from '../proto/reddit/Post.ts'
import { votePost } from './handlers/votePost.ts'
import { getPost } from './handlers/getPost.ts'
import { createComment } from './handlers/createComment.ts'
import { voteComment } from './handlers/voteComment.ts'
import { toEditorSettings } from 'typescript'
import { topVotedComments } from './handlers/topVotedComments.ts'
import { expandCommentBranch } from './handlers/expandCommentBranch.ts'
const PORT = 9000
const PROTO_FILE = '../proto/reddit.proto'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const redditPackage = grpcObj.reddit

function main() {
    const server = getServer()
  
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        console.error(err)
        return
      }
      console.log(`Your server as started on port ${port}`)
      server.start()
    })
}


function getServer() {
    const server = new grpc.Server()
server.addService(redditPackage.Reddit.service,{
    "PingPong":(req,res) => {
        console.log(req.request)
        res(null,{message:"Pong"})
    },
    "CreatePost": createPost,
    "VotePost": votePost,
    "GetPost":getPost,
    "CreateComment":createComment,
    "VoteComment":voteComment,
    "TopVotedComments":topVotedComments,
    "ExpandCommentBranch":expandCommentBranch
} as RedditHandlers

)
    return server
}
  
main()

