const { Router } = require('express')
const controllers = require('../controllers')

const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/addpost', controllers.createPost)

router.get('/allposts', controllers.findAllPosts)

router.delete('/allposts/:id', controllers.deletePost)

router.get('/allposts/:id', controllers.findOnePost)

module.exports = router
