const express = require("express");
const connect = require("./config/database");
const app = express();

const TweetService = require("./services/tweet-service");

app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();
  console.log("Connected to MongoDB !");
  let service = new TweetService();
  const res = await service.create({
    content: "#sad ",
  });
  console.log(res);
});
