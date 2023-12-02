export const users = [
    { user_id: "user123" },
    { user_id: "coolCoder" },
    { user_id: "artEnthusiast" },
    { user_id: "scienceGeek" },
    { user_id: "travelLover" }
  ];

  
export const posts = [
    { id:1,title: "First Post", text: "Welcome to the forum!", video_url: null, image_url: null, subreddit: "general", author: "user123", score: 10, state: 0, publication_date: 1633036800 },
    { id:2, title: "Favorite Coding Language?", text: "What's your favorite coding language and why?", video_url: null, image_url: null, subreddit: "programming", author: "coolCoder", score: 25, state: 0, publication_date: 1633123200 },
    { id:3, title: "Art in Nature", text: "Sharing my latest nature photography", video_url: null, image_url: "nature.jpg", subreddit: "photography", author: "artEnthusiast", score: 15, state: 0, publication_date: 1633209600 },
    { id:4, title: "The Science of Sleep", text: "Discussing recent research on sleep patterns", video_url: null, image_url: null, subreddit: "science", author: "scienceGeek", score: 30, state: 0, publication_date: 1633296000 },
    { id:5, title: "Traveling to Japan", text: "Tips for first-time travelers to Japan?", video_url: null, image_url: "japan.jpg", subreddit: "travel", author: "travelLover", score: 45, state: 0, publication_date: 1633382400 }
  ];

export const comments = [
  { id: 13, author: "coolCoder", text: "Great post!", score: 5, state: 0, publication_date: 1633037000, post_id: 2, reply_to: null },
  { id: 14, author: "user123", text: "I love Python for its simplicity.", score: 3, state: 0, publication_date: 1633123300, post_id: 2, reply_to: null },
  { id: 15, author: "travelLover", text: "Amazing photo!", score: 4, state: 0, publication_date: 1633209700, post_id: 3, reply_to: 1 },
  { id: 16, author: "artEnthusiast", text: "Very informative, thanks for sharing!", score: 6, state: 0, publication_date: 1633296100, post_id: 4, reply_to: null },


  //
  { id: 1, author: "userA", text: "Top-level comment 1", score: 6, state: 0, publication_date: 1633400000, post_id: 1, reply_to: null },
  { id: 2, author: "userB", text: "Top-level comment 2", score: 5, state: 0, publication_date: 1633403600, post_id: 1, reply_to: null },
  { id: 3, author: "userC", text: "Top-level comment 3", score: 4, state: 0, publication_date: 1633407200, post_id: 1, reply_to: null },

  // Replies to the first top-level comment
  { id: 4, author: "userD", text: "Reply 1 to Comment 1", score: 7, state: 0, publication_date: 1633410800, post_id: 1, reply_to: 1 },
  { id: 5, author: "userE", text: "Reply 2 to Comment 1", score: 6, state: 0, publication_date: 1633414400, post_id: 1, reply_to: 1 },
  { id: 6, author: "userF", text: "Reply 3 to Comment 1", score: 4, state: 0, publication_date: 1633418000, post_id: 1, reply_to: 1 },

  // Replies to the second top-level comment
  { id: 7, author: "userG", text: "Reply 1 to Comment 2", score: 7, state: 0, publication_date: 1633421600, post_id: 1, reply_to: 4 },
  { id: 8, author: "userH", text: "Reply 2 to Comment 2", score: 6, state: 0, publication_date: 1633425200, post_id: 1, reply_to: 4 },
  { id: 9, author: "userI", text: "Reply 3 to Comment 2", score: 4, state: 0, publication_date: 1633428800, post_id: 1, reply_to: 4 },

  // Replies to the third top-level comment
  { id: 10, author: "userJ", text: "Reply 1 to Comment 3", score: 7, state: 0, publication_date: 1633432400, post_id: 1, reply_to: 5 },
  { id: 11, author: "userK", text: "Reply 2 to Comment 3", score: 6, state: 0, publication_date: 1633436000, post_id: 1, reply_to: 5 },
  { id: 12, author: "userL", text: "Reply 3 to Comment 3", score: 4, state: 0, publication_date: 1633439600, post_id: 1, reply_to: 5 }

  ];

export const subreddits = [
    { name: "general", status: 0, tags: ["welcome", "introductions"] },
    { name: "programming", status: 0, tags: ["coding", "technology", "development"] },
    { name: "photography", status: 0, tags: ["photos", "art"] },
    { name: "science", status: 0, tags: ["research", "education"] },
    { name: "travel", status: 0, tags: ["adventure", "guides", "tips"] }
  ];
   
  