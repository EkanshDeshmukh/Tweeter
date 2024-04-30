import TweetService from "../services/tweet-service";

const tweetService = new TweetService();

export const createTweet = async (res, req) => {
  try {
    const response = await tweetService.create(req.body);
    return response.status(201).json({
      success: true,
      message: "Successfully created a Tweet",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating tweet",
      data: {},
      error: error,
    });
  }
};
