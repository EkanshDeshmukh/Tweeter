import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
