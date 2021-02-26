import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const { author, description, addingNewPost } = this.props
    return (
      <div>
        <h1>Form</h1>

        <form onSubmit={addingNewPost}>
          <input type="text" placeholder="Your Name" name={author} />
          <br></br>
          <br></br>
          <textarea
            type="text"
            placeholder="Write a quick post!"
            value={description}
          ></textarea>
          <button type="submit" className="btn custom-btn">
            Publish!
          </button>
        </form>
      </div>
    )
  }
}
