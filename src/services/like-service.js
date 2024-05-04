import { LikeRepository, TweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";
import Comment from "../models/comment.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }
  async toggleLike(modelId, modelType, userId) {
    //api/v1/likes/toggle?id=model_id&type=Tweet
    if (modelType == "Tweet") {
      var likeable = Tweet.findById(modelId).populate({ path: "likes" });
    } else if (modelType == "Comment") {
      //
    } else {
      throw new Error("unknown model type");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });
    console.log("service", exists);
    if (exists) {
      likeable.likes.pull(exists.id);
      await likeable.save();
      await exists.remove();
      var isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      console.log(newLike);
      var isAdded = true;
    }
    return isAdded;
  }
}

export default LikeService;
