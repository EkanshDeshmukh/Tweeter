const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw error; // Re-throw the error to handle it elsewhere
    }
  }
}

module.exports = TweetRepository;