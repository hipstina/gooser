import React, { Component } from 'react'
import axios from 'axios'

export default class ClearPost extends Component {
  render() {
    const { postId, onClick } = this.props
    return (
      <div>
        <button postId={postId} onClick={onClick}>
          Clear
        </button>
      </div>
    )
  }
}
