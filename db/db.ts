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
    { author: "coolCoder", text: "Great post!", score: 5, state: 0, publication_date: 1633037000 },
    { author: "user123", text: "I love Python for its simplicity.", score: 3, state: 0, publication_date: 1633123300 },
    { author: "travelLover", text: "Amazing photo!", score: 4, state: 0, publication_date: 1633209700 },
    { author: "artEnthusiast", text: "Very informative, thanks for sharing!", score: 6, state: 0, publication_date: 1633296100 },
    { author: "scienceGeek", text: "Would love to visit Japan someday.", score: 2, state: 0, publication_date: 1633382500 }
  ];

export const subreddits = [
    { name: "general", status: 0, tags: ["welcome", "introductions"] },
    { name: "programming", status: 0, tags: ["coding", "technology", "development"] },
    { name: "photography", status: 0, tags: ["photos", "art"] },
    { name: "science", status: 0, tags: ["research", "education"] },
    { name: "travel", status: 0, tags: ["adventure", "guides", "tips"] }
  ];
   
  