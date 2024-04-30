const { TweetRepository, HashtagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }
  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#[a-zA-Z]+/g)
      .map((element) => element.substring(1).toLowerCase());
    const tweet = this.tweetRepository.create(data);
    let alreadyPresentTag = this.hashtagRepository.findByName(tags);
    if (!Array.isArray(alreadyPresentTag)) {
      alreadyPresentTag = [];
    }
    const existingTagTitle = alreadyPresentTag.map((tag) => tag.title);
    let newTags = tags.filter((tag) => !existingTagTitle.includes(tag));
    newTags = newTags.map((tag) => {
      return { title: tag, tweets: [tweet.id] };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTag.forEach( tag => {
      tag.tweets.push(tweet.id);
       tag.save();
    });
    return tweet;
  }
}


module.exports = TweetService