const Hashtag = require("../models/hashtag");

class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }
  async get(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }
  async update(hashId, data) {
    try {
      const hashtag = await Hashtag.findByIdAndUpdate(hashId, data);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }
  async destroy(id) {
    try {
      const hashtag = await Hashtag.findByIdAndRemove(id);
      return hashtag;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = HashtagRepository;
