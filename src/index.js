import express from "express";
import {connect} from "./config/database.js";
const app = express();

import TweetService from "./services/tweet-service.js";

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
