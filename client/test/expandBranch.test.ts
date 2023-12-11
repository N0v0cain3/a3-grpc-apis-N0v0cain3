import { expandCommentBranch } from '../highLevelFunctions'; // adjust the import path as needed

// Mock console.log and console.error
beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

// Clear mocks after each test
afterEach(() => {
    jest.clearAllMocks();
});

// Mock API client
class MockApiClient {
    ExpandCommentBranch(request, callback) {
        const { commentId, limit } = request;

        if (commentId === 1 && limit === 3) {
            callback(null, {
                commentBranch: {
                    comment: { id: 1, text: 'Parent Comment', score: 100 },
                    replies: [
                        { comment: { id: 2, text: 'First Reply', score: 10 }, replies: [] },
                        { comment: { id: 3, text: 'Second Reply', score: 50 }, replies: [] },
                        { comment: { id: 4, text: 'Third Reply', score: 20 }, replies: [] }
                    ]
                }
            });
        } else {
            callback(new Error('Comment not found'), null);
        }
    }
}


describe('expandCommentBranch', () => {
  it('should return the most upvoted reply under the most upvoted comment', (done) => {
    const apiClient = new MockApiClient();
    const commentId = 1;
    const limit = 3;

    expandCommentBranch(apiClient, commentId, limit, (err, result) => {
      expect(err).toBeNull();
      expect(result).toBeDefined();
      expect(result.id).toBe(3); // ID of the most upvoted reply
      expect(result.text).toBe('Second Reply');
      done();
    });
  });


  it('should handle errors when the comment is not found', (done) => {
    const apiClient = new MockApiClient();
    const commentId = 'unknownCommentId';
    const limit = 3;

    expandCommentBranch(apiClient, commentId, limit, (err, result) => {
      expect(err).toBeDefined();
      expect(result).toBeNull();
      done();
    });
  });
});
