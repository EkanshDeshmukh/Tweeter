import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export const createTweet = async (req, res) => {
  try {
    const response = await tweetService.create(req.body);
    return res.status(201).json({
      success: true,
      message: "Successfully created a Tweet",
      data: response,
      error: {},
    });
  } catch (err) {
    console.log("controllers", err);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating tweet",
      data: {},
      error: err,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const response = await tweetService.get(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Successfully fetched tweet",
      data: response,
      error: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching tweet",
      data: {},
      error: error,
    });
  }
};
