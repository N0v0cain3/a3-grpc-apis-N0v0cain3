import path from 'path'
import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/reddit'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import readline from 'readline';
import { retrievePost, highLevelFunction } from './highLevelFunctions.ts';

const PORT = 9000
const PROTO_FILE = '../proto/reddit.proto'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const client = new grpcObj.reddit.Reddit(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
)

const deadline = new Date();

deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
    if (err) {
        console.error(err)
        return
    }

    onClientReady()

    highLevelFunction(client, 1, 1, (err, comment) => {
        if (err) {
            console.log(err)
        }
        console.log(comment)
    })

    startMonitoringUpdates()

})

function onClientReady() {
    client.CreatePost({ post: { title: "Testing testing", text: "Tips for first-time testing?", videoUrl: null, imageUrl: "japan.jpg", subreddit: "travel", author: "travelLover", score: 45, state: 0, publicationDate: 1633382400 } }, (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        console.log(result)
    }),
        client.VotePost({ postId: 2, upvote: true }, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        }),
        client.GetPost({ postId: 6 }, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        }),
        client.CreateComment({ author: "scienceGeek", text: "Would love to visit Japan someday.", postId: 5, replyTo: 3 }, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        }),
        client.VoteComment({ commentId: 4, upvote: true }, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        }),
        client.TopVotedComments({ postId: 1, limit: 3 }, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result.topComments)
        }),
        client.ExpandCommentBranch({ commentId: 1, limit: 3 }, (err, result) => {
            const N = 3;

            if (err) {
                console.error(err)
                return
            }

            console.log(`${N} most voted comment for:  Comment`, result.commentBranch.comment)
            for (let i = 0; i < N; i++) {
                console.log(` ${i + 1} rank comment  : `, result.commentBranch.replies[i].comment)
                console.log(` ${i + 1} rank comment replies : `, result.commentBranch.replies[i].replies)
            }
        })

    //monitorUpdates()
}


function startMonitoringUpdates() {
    // Create a bidirectional stream
    const stream = client.MonitorUpdates();


    // Example: Monitor updates for a specific post
    stream.write({ postId: 1 });

    // Example: Monitor updates for a specific comment
    stream.write({ commentId: 2 });
    // Handle data received from the server
    stream.on('data', function (response) {
        if (response.updates && response.updates.length > 0) {
            response.updates.forEach(update => {
                if (update.postId) {
                    console.log(`Post Update - ID: ${update.postId}, New Score: ${update.newScore}`);
                } else if (update.commentId) {
                    console.log(`Comment Update - ID: ${update.commentId}, New Score: ${update.newScore}`);
                }
            });
        }
        if (response.error) {
            console.error('Error:', response.error.message);
        }
    });

    // Handle stream end
    stream.on('end', function () {
        console.log('Stream ended.');
    });

    // Handle stream errors
    stream.on('error', function (error) {
        console.error('Stream error:', error.message);
    });



}
