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
  const tweet = await tweetRepo.update(
    "662a282641207eaf8e432147",
    { userEmail:"b@a.com" },
   
  );
  console.log("Tweet created:", tweet);
});
