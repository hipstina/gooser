import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    const {author, description, addingNewPost} = this.props
    return (
      <div>
        <h1>Form</h1>

        <form>
        <input
            type="text"
            name="name"
            placeholder="Your Name"
            name={author}
          />
          <br></br><br></br>
          <textarea 
            type="text"
            placeholder="Write a quick post!"
            name={description}
            ></textarea>
          <button
            type="submit"
            onClick={addingNewPost}
            className="btn custom-btn"
          >Publish!
          </button>
        </form>

      </div>
    )
  }
}
