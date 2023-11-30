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
    })
}