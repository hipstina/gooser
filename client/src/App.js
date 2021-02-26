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
      console.log(res)
    } catch (error) {
      throw error
    }
  }
  ///// we are the best team
  ///we stopped here
  addingNewPost = (event) => {
    event.preventDefault()
    this.setState({
      author: '',
      description: ''
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            component={(routerProps) => <Form {...routerProps} />}
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
