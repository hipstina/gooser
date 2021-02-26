import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className ="nav">
          <NavLink to="/" className="">
            New Post
          </NavLink>

          <NavLink to="/allposts" className="">
            All Posts
          </NavLink>
        </nav>
      </header>
    )
  }
}
