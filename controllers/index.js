const blogPost = require('../models/blog-post')
const Post = require('../models/blog-post')

const createPost = async (req,res) =>{
  try{
  const post = await new blogPost(req.body)
  await post.save()
  return res.status(201).json({
post

  })

} catch (error) {
  return res.status(500).json({error :})





}

module.exports = {
  createPost
}
