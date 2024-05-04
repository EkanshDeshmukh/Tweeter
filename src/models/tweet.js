import mongoose from "mongoose";
const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    userEmail: String,
    likes:[{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Like'
    }]
  },
  { timestamps: true }
);

tweetSchema.virtual("contentWithEmail").get(function () {
  return `${this.content} Created by ${this.userEmail}`;
});

tweetSchema.pre("save", function (next) {
 // console.log("inside a hook");
  this.content = this.content + ".";
  next();
});

const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet