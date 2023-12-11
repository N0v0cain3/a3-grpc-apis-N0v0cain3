import { retrieveTopVotedComment } from '../highLevelFunctions.ts'; // adjust the import path as needed

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
    TopVotedComments(request, callback) {
        const { postId, limit } = request;

        if (postId === 'knownPostId' && limit === 1) {
            callback(null, { topComments: [{ id: 'comment1', text: 'Mock Comment', score: 10 }] });
        } else {
            callback(new Error('Comments not found'), null);
        }
    }
}

describe('retrieveTopVotedComment', () => {
    it('should log the top voted comment when found', () => {
        const apiClient = new MockApiClient();
        const postId = 'knownPostId';

        retrieveTopVotedComment(apiClient, postId);

        expect(console.log).toHaveBeenCalledWith([{ id: 'comment1', text: 'Mock Comment', score: 10 }]);
    });

    it('should log an error when comments are not found', () => {
        const apiClient = new MockApiClient();
        const postId = 'unknownPostId';

        retrieveTopVotedComment(apiClient, postId);

        expect(console.error).toHaveBeenCalledWith(new Error('Comments not found'));
    });
});
