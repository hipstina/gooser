import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './screens/Form'
import Dashboard from './screens/Dashboard'
import { Route, Switch } from 'react-router-dom'

// import axios
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      blogPosts: [],
      submitted: false,
      author: '',
      description: ''
      // newPost: {
      //   author: this.state.author,
      //   description: this.state.description
      // }
    }
  }

  // add componentDidMount
  componentDidMount() {
    this.getAllPosts()
  }

  getAllPosts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/api/allposts')
      console.log(res)
    } catch (error) {
      throw error
    }
  }

  publishNewPost = async () => {
    try {
      const res = await axios.post(
        'http://localhost:3001/api/addpost',
        // this.state.newPost
        { author: this.state.author, description: this.state.description }
      )
      console.log(res)
      return res.data
    } catch (error) {
      throw error
    }
  }

  ///we stopped here
  addingNewPost = (event) => {
    event.preventDefault()
    
    const userName = event.target.name
    const userPost = event.target.value

    this.setState({
      newPost: { author: userName, description: userPost },
      submitted: true
    })
    this.publishNewPost()
  }

  render() {
    const newPost = this.state.newPost

    return (
      <div className="App">
        {/* <button
          type="submit"
          onClick={this.addingNewPost}
          className="btn custom-btn"
        >
          Publish!
        </button> */}
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={(routerProps) => (
              <Form
                {...routerProps}
                name={this.state.author}
                value={this.state.description}
                onClick={this.addingNewPost}
              />
            )}
          />
          <Route
            path="/allposts"
            component={(routerProps) => <Dashboard {...routerProps} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
