const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogPost = new Schema(
  {
    author: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('blogposts', BlogPost)
