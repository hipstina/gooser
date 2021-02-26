import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './screens/Form'
import Dashboard from './screens/Dashboard'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      blogPosts: []
    }
  }

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
