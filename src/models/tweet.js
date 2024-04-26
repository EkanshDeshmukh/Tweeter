const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: String,
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return `${this.content} Created by ${this.userEmail}`;
});

tweetSchema.pre("save", function (next) {
  console.log("inside a hook");
  this.content = this.content + ".....";
  next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
