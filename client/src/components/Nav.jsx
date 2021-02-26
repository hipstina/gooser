import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../logo.css'

export default class Nav extends Component {
  render() {
    return (
      <header>
        <nav className="nav">
          <NavLink to="/" className="">
            + New Post
          </NavLink>
          <NavLink to="/">
            <div className="logo1">
              <h1 className="logo">Gooser</h1>
            </div>
          </NavLink>

          <NavLink to="/allposts" className="">
            All Posts
          </NavLink>
        </nav>
      </header>
    )
  }
}
