const mongoose = require("mongoose");

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
