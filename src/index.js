const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repo");
const Comment = require("./models/comment");
const Tweet = require('./models/tweet')
app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();
  const tweetRepo = new TweetRepository();

  //const tweet = await Tweet.find();//
  //const tweet = await Tweet.create();//
  // const tweet = await tweetRepo.create({
  //   content: "This is my sec tweet with comment",
  //});
  // console.log("Tweet created:", tweet);
  //const comment = await Comment.create(
  //  { content: "This is sec comment 2" },
  //);
  //tweet.comment.push(comment);
  //await tweet.save();
  //console.log(tweet);

 // const tweet = await tweetRepo.getAll(2, 3);
 const tweet =  await Tweet.find({content:["122"]})
  console.log(tweet);
 // console.log(tweet[1].contentWithEmail);
});
