import LikeService from "../services/like-service.js";

export const toggleLike = async (req, res) => {
  try {
    const response = await new LikeService().toggleLike(
      req.query.modelId,
      req.query.modelType,
      req.body.userId
    );
    return res.status(201).json({
      success: true,
      message: "Successfully toggled like",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong in like-controller",
      data: {},
      error: error,
    });
  }
};
