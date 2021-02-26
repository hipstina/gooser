import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './screens/Form'
import Dashboard from './screens/Dashboard'
import { Route, Switch, } from 'react-router-dom'

// import axios
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      allPosts: [],
      // for app.js form hard coded
      // submitted: false,
      // author: '',
      // description: ''
    }
  }

  // add componentDidMount
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

  /*Form Helper Functions (for app.js form)*/

  // publishNewPost = async () => {
  //   const newPost = {
  //     author: this.state.author,
  //     description: this.state.description
  //   }
  //   try {
  //     const res = await axios.post('http://localhost:3001/api/addpost', newPost)
  //     console.log(res.data)
  //     const res2 = await axios.get('http://localhost:3001/api/allposts')
  //     this.setState({
  //       blogPosts: res2.data.posts
  //     })
  //     return res2.data
  //   } catch (error) {
  //     throw error
  //   }
  // }

  // handleChange = ({ target }) => {
  //   this.setState({
  //     [target.name]: target.value
  //   })

  //   console.log('PUBLISHING', this.state)
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault()
  //   this.setState({
  //     submitted: true
  //   })

  //   this.publishNewPost()
  //   this.updateSubmitted()
  // }

  // updateSubmitted = () => {
  //   this.setState({
  //     submitted: false
  //   })
  // }

  /* End of Form Helper Functions (for app.js form)*/

  render() {
    const posts = this.state.allPosts

    return (
      <div className="App">
        <Nav />
        {/* // added to app.js to hardcoard form */}
        {/* <div>
        {this.state.submitted && (
          <NavLink to="/allposts">View All Posts</NavLink>
        )}
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
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
      </div> 

      <Dashboard />*/}
        <Switch>
          <Route
            exact
            path="/"
            component={(routerProps) => (
              <Form
                {...routerProps}
                posts={posts}
                getAllPosts={this.getAllPosts}
              />
            )}
          />
          <Route
            path="/allposts"
            component={(routerProps) => (
              <Dashboard {...routerProps} posts={posts} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

export default App
