const { highLevelFunction } = require('../highLevelFunctions');

describe('highLevelFunction', () => {
    let mockApiClient;

    beforeEach(() => {
        // Reset mockApiClient before each test
        mockApiClient = {
            GetPost: jest.fn(),
            TopVotedComments: jest.fn(),
            ExpandCommentBranch: jest.fn(),
        };
    });

    it('should handle successful case', done => {
        // Mock successful responses for all methods
        mockApiClient.GetPost.mockImplementation((query, callback) => {
            callback(null, { post: { id: 1 } }); // Mock response for GetPost
        });
        mockApiClient.TopVotedComments.mockImplementation((query, callback) => {
            callback(null, { 
                topComments: [{ comment: { id: 2, score: 10 } }] // Mock response for TopVotedComments
            });
        });
        mockApiClient.ExpandCommentBranch.mockImplementation((query, callback) => {
            callback(null, { 
                commentBranch: {
                    comment: { id: 2, score: 10 },
                    replies: [
                        { comment: { id: 3, score: 5 } },
                        { comment: { id: 4, score: 15 } } // This is the most upvoted reply
                    ]
                }
            }); // Mock response for ExpandCommentBranch
        });
    
        // Call the highLevelFunction
        highLevelFunction(mockApiClient, 1, 1, (err, result) => {
            expect(err).toBeNull();
    
            // Assertions for successful case
            expect(result).not.toBeNull();
            expect(result.id).toBe(4); // The most upvoted reply's ID should be 4
            expect(result.score).toBe(15); // The score of the most upvoted reply should be 15
    
            done();
        });
    });
 })