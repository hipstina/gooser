<<<<<<< HEAD
import './App.css';


function App() {
  return (
    <div className="App">
    </div>
  );
=======
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
            path="/allposts"
            component={(routerProps) => <Dashboard {...routerProps} />}
          />
        </Switch>
      </div>
    )
  }
>>>>>>> 9835eeb440b0cb07f1ffdd3b3dae181e784b8ae8
}

export default App
