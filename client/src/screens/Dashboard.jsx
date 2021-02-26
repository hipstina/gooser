import React, { Component } from 'react'
import './Dashboard.css'
import BlogPost from '../components/BlogPost'
import axios from 'axios'

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
      const res = await axios.get('http://localhost:3001/api/allposts')
      // console.log(res)
      this.setState({
        allPosts: res.data.posts
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    const allPosts = this.state.allPosts.reverse()
    return (
      <div>
        <h1 className="timeline">Dashboard</h1>
        <div className="post-body">
          {allPosts.map((result, index) => (
            <BlogPost
              key={result._id}
              author={result.author}
              description={result.description}
              createdAt={result.createdAt}
              postId={result._id}
            />
          ))}
        </div>
      </div>
    )
  }
}
