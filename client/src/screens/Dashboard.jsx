import React, { Component } from 'react'
import './Dashboard.css'
import BlogPost from '../components/BlogPost'
import axios from 'axios'
import { BASE_URL } from '../globals'

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPosts: []
    }
  }

  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/allposts`)
      // console.log(res)
      this.setState({
        allPosts: res.data.posts
      })
    } catch (error) {
      throw error
    }
  }

  deletePost = async (event) => {
    const postId = event.target.attributes.postId.value

    try {
      const res = await axios.delete(`${BASE_URL}/api/allposts/${postId}`)
      console.log(res.data)
      const res2 = await axios.get(`${BASE_URL}/api/allposts`)
      this.setState({
        allPosts: res2.data.posts
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }

  render() {
    const allPosts = this.state.allPosts.reverse()
    return (
      <div>
        <div className="post-body">
          {allPosts.map((result, index) => (
            <BlogPost
              key={result._id}
              author={result.author}
              description={result.description}
              createdAt={result.createdAt}
              postId={result._id}
              onClick={this.deletePost}
            />
          ))}
        </div>
      </div>
    )
  }
}
