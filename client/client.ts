import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/reddit'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const PORT = 9000
const PROTO_FILE = '../proto/reddit.proto'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new grpcObj.reddit.Reddit(
`0.0.0.0:${PORT}`,grpc.credentials.createInsecure()
)

const deadline = new Date();

deadline.setSeconds(deadline.getSeconds() + 5) 
client.waitForReady(deadline,(err)=>{
    if(err){
        console.error(err)
        return
    }

    onClientReady()

})

function onClientReady() {
    client.PingPong({message:"ping"},(err, result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.CreatePost({ post : {title: "Testing testing", text: "Tips for first-time testing?", videoUrl: null, imageUrl: "japan.jpg", subreddit: "travel", author: "travelLover", score: 45, state: 0, publicationDate: 1633382400} },(err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.VotePost({postId:2,upvote:true},(err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.GetPost({postId:6},(err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.CreateComment({ author: "scienceGeek", text: "Would love to visit Japan someday.", postId: 5, replyTo: 3 },(err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.VoteComment({commentId:4, upvote:true}, (err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result)
    }),
    client.TopVotedComments({postId:1,limit:3}, (err,result)=>{
        if(err){
            console.error(err)
            return
        }
        console.log(result.topComments)
    }),
    client.ExpandCommentBranch({commentId:1,limit:3},(err,result)=>{
        const N = 3;

        if(err){
            console.error(err)
            return
        }

        console.log(`${N} most voted comment for:  Comment`,result.commentBranch.comment)
        for(let i=0;i<N;i++){
        console.log(` ${i+1} rank comment  : `,result.commentBranch.replies[i].comment)
        console.log(` ${i+1} rank comment replies : `,result.commentBranch.replies[i].replies)
        }
    })
}