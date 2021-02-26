import React, { Component } from 'react'
import './Dashboard.css'
import axios from 'axios'
import BlogPost from '../components/BlogPost'

export default class Dashboard extends Component {
  constructor()
  {
    super()
    this.state = {
      allPosts: []
    }
  }

  componentDidMount () {
  this.getAllPosts()
  }


  getAllPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/allposts')
      console.log(res)
      this.setState({allPosts: res.data.posts})
    } catch (error) {
      throw error
    }
  }
  render() {
    return (
      <div>
        <h1 className="timeline">Dashboard</h1>
        <div className="post-body">
          {this.state.allPosts.map((result, index) =>
          <BlogPost
          author={result.author} 
          description={result.description}/>
          )}
        </div>

      </div>
    )
  }
}
