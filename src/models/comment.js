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

module.exports = mongoose.model("Comment", commentSchema);

export default Comment