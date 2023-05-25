import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: String,
  description: String,
  picturePath: String,
  userPicturePath: String,
  like: {
    type: Map,
    of: Boolean,
  },
  /* not array because map is more efficient */
  comments: {
    type: Array,
    default: [],
  },
},{timestamps:true});

const Post = mongoose.model("Post", postSchema);

export default Post;