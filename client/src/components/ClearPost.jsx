import React, { Component } from 'react'
import '../screens/Dashboard.css'

export default class ClearPost extends Component {
  render() {
    const { postId, onClick } = this.props
    return (
      <div>
        <button postId={postId} onClick={onClick} className="delete-btn">
          x
        </button>
      </div>
    )
  }
}
