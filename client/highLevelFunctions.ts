/**
 * Retrieves a post using the provided API client.
 * 
 * @param {Object} apiClient - An instance of the API client.
 * @param {number|string} postId - The ID of the post to retrieve.
 * @returns {Promise<Object>} - A promise that resolves to the retrieved post.
 */

import { topVotedComments } from "../server/handlers/topVotedComments";

export function retrievePost(apiClient, postId) {
    apiClient.GetPost({ postId: postId }, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result);
        return
    });
}


/**
 * Retrieves the top voted comment of a post using the provided API client.
 * 
 * @param {Object} apiClient - An instance of the API client.
 * @param {number|string} postId - The ID of the post.
 * @param {number} limit - The number of top comments to retrieve (default is 1).
 */

export function retrieveTopVotedComment(apiClient, postId, limit = 1) {
    apiClient.TopVotedComments({ postId: postId, limit: limit }, (err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result.topComments);
        return
    });
}

/**
 * Expands a comment branch using the provided API client.
 * 
 * @param {Object} apiClient - An instance of the API client.
 * @param {number|string} commentId - The ID of the parent comment.
 * @param {number} limit - The number of replies to retrieve for each comment.
 */

export function expandCommentBranch(apiClient, commentId, limit, callback) {
    apiClient.ExpandCommentBranch({ commentId, limit }, (err, result) => {
        if (err) {
            console.error(err);
            callback(err, null);
            return;
        }

        // Find the most upvoted comment
        const mostUpvotedComment = result.commentBranch.comment;

        // Find the most upvoted reply under the most upvoted comment
        const mostUpvotedReply = result.commentBranch.replies.reduce((topReply, currentReply) => {
            return (!topReply || currentReply.comment.score > topReply.comment.score) ? currentReply : topReply;
        }, null);

        callback(null, mostUpvotedReply ? mostUpvotedReply.comment : null);
    });
}

export function highLevelFunction(apiClient, postId, limit = 1, callback) {

    apiClient.GetPost({ postId: postId }, (err, result) => {
        if (err) {
            console.error(err);
            return
        }
        console.log("result", result)
        apiClient.TopVotedComments({ postId: result.post.id, limit: 1 }, (err, response) => {
            if (err) {
                console.error(err);
                return;
            }

            console.log("response", response.topComments)
            apiClient.ExpandCommentBranch({ commentId: response.topComments[0].comment.id, limit: 1 }, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }

                // Find the most upvoted comment
                const mostUpvotedComment = result.commentBranch.comment;

                // Find the most upvoted reply under the most upvoted comment
                const mostUpvotedReply = result.commentBranch.replies.reduce((topReply, currentReply) => {
                    return (!topReply || currentReply.comment.score > topReply.comment.score) ? currentReply : topReply;
                }, null);

                callback(null, mostUpvotedReply ? mostUpvotedReply.comment : null);
            });

        });
    })
}

