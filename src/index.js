const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetRepository = require("./repository/tweet-repo");
const Comment = require("./models/comment");
const Tweet = require("./models/tweet");
app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();
  const tweetRepo = new TweetRepository();
});
