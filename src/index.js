import express from "express";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

import apiRoutes from "./routes/index.js";
import TweetRepository from "./repository/tweet-repo.js";
import UserRepository from "./repository/user-repo.js";
import LikeService from "./services/like-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", apiRoutes);
app.listen(3000, async () => {
  console.log("Listening on port 3000");
  await connect();
  console.log("Connected to MongoDB !");
  const tweetRepo = new TweetRepository();
  const userRepo = new UserRepository();
  const tweet = await tweetRepo.getAll(0, 2);
  console.log(tweet);
  const user = await userRepo.getAll();
  console.log(user);
  const likeService = new LikeService();
  await likeService.toggleLike(tweet[0].id, "Tweet", user[0].id);
});
