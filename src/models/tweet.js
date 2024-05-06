import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [100, "Tweet cannot be more than 100 characters"],
      min: [4, "Tweet cannot be less than 4 characters"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
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

// tweetSchema.pre("save", function (next) {
// this.content = this.content + ".";
// next();
// });

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
