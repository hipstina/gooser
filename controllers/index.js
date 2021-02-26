const Post = require('../models/blog-post')

const createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body)
    await post.save()
    return res.status(201).json({
      post
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    return res.status(200).json({ posts })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createPost,
  findAllPosts
}
