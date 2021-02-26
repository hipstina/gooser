import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './screens/Form'
import Dashboard from './screens/Dashboard'
import { Route, Switch } from 'react-router-dom'
import BASE_URL from './globals'

// import axios
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

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
      this.setState({
        allPosts: res.data.posts
      })
    } catch (error) {
      throw error
    }
  }

  render() {
    const posts = this.state.allPosts

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
