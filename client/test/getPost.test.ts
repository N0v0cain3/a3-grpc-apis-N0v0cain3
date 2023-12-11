import { retrievePost } from '../highLevelFunctions'; // adjust the import path as needed

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
  GetPost(request, callback) {
    const { postId } = request;

    if (postId === 'knownPostId') {
      callback(null, { id: postId, title: 'Mock Post Title', content: 'Mock content' });
    } else {
      callback(new Error('Post not found'), null);
    }
  }
}

describe('retrievePost', () => {
  it('should log the post when found', () => {
    const apiClient = new MockApiClient();
    const postId = 'knownPostId';

    retrievePost(apiClient, postId);

    expect(console.log).toHaveBeenCalledWith({ id: postId, title: 'Mock Post Title', content: 'Mock content' });
  });

  it('should log an error when the post is not found', () => {
    const apiClient = new MockApiClient();
    const postId = 'unknownPostId';

    retrievePost(apiClient, postId);

    expect(console.error).toHaveBeenCalledWith(new Error('Post not found'));
  });
});
