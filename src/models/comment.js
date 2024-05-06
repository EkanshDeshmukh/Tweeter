import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    onModel: {
      type: String,
      required: true,
      enum: ["Tweet", "Comment"],
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "onModel",
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
