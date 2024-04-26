const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repo");
app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();

  const tweetRepo = new TweetRepository();

  //const tweet = await Tweet.find();//
  //const tweet = await Tweet.create();//
  const tweet = await tweetRepo.create({
    content: "This is my sec tweet with comment",
  });
  console.log("Tweet created:", tweet);
  tweet.comment.push({ content: "first comment here " });
  await tweet.save();
  console.log(tweet);
});
