import React, { Component } from 'react'
import axios from 'axios'
import './Form.css'
import { NavLink } from 'react-router-dom'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPosts: [],
      blogPosts: props.posts,
      submitted: false,
      author: '',
      description: ''
    }
  }

  publishNewPost = async () => {
    const newPost = {
      author: this.state.author,
      description: this.state.description
    }
    try {
      const res = await axios.post('http://localhost:3001/api/addpost', newPost)
      console.log(res.data)
      const res2 = await axios.get('http://localhost:3001/api/allposts')
      this.setState({
        blogPosts: res2.data.posts
      })
      return res2.data
    } catch (error) {
      throw error
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    })

    console.log('PUBLISHING', this.state)
    this.updateSubmitted()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submitted: true
    })

    this.publishNewPost()
  }

  updateSubmitted = () => {
    this.setState({
      submitted: false
    })
  }

  render() {
    return (
      <div className= ".form-body">
        <h1>Form</h1>

          <form className="form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={this.state.author}
              onChange={this.handleChange}
              name="author"
              />

            <textarea
              type="text"
              placeholder="Write a quick post!"
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              ></textarea>
            <button type="submit" className="btn custom-btn">
              Publish!
            </button>
          </form>
        
        {this.state.submitted && (
          <NavLink to="/allposts">View All Posts</NavLink>
        )}
      </div>
    )
  }
}
