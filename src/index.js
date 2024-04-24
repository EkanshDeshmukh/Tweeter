const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require('./repository/tweet-repo')

app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();
  
  const tweetRepo = new TweetRepository();
  try {
    const tweet = await tweetRepo.create({ content: "First tweettt" });
    console.log("Tweet created:", tweet);
  } catch (error) {
    console.error("Error:", error);
  }
});