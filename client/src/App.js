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
      blogPosts: []
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
        blogPosts: res.data.posts
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    const posts = this.state.blogPosts

    return (
      <div className="App">

        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={(routerProps) => (
              <Form
                {...routerProps}
                posts={posts}
                getAllPosts={this.getAllPosts}
                // author={this.state.author}
                // description={this.state.description}
                // onSubmit={this.handleSubmit}
                // onChange={this.handleChange}
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
