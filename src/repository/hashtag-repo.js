import Hashtag from "../models/hastag.js";

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
      const response = await Hashtag.findById(id);
      return response;
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
  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({
        title: titleList,
      });
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
      return tags;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
