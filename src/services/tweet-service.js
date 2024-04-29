const { TweetRepository } = require("../repository");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
  }
  async create(data) {
    const content = data.content;
    const tags = content.match(/#[a-zA-Z]+/g).map((element) => element.substring(1).toLowerCase());
    console.log(tags);
    const tweets = await this.tweetRepository.create(data);
    
    return tweets;
  }
}

module.exports = TweetService;
