import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()

    this.state = {
      blogPosts: []
    }
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
            path="/posts"
            component={(routerProps) => <Dashboard {...routerProps} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
