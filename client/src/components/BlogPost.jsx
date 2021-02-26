import React, { Component } from 'react'
import ClearPost from './ClearPost'

export default class BlogPost extends Component {
  render() {
    const { author, description, createdAt, postId, onClick } = this.props

    const timestamp = createdAt
    const date = new Date(timestamp)
    const created = date.toDateString()

    return (
      <div className="post">
        <div className="post-details">
          <p className="post-author">@{author}</p>
          <br />
          <p className="post-creation"> {created}</p>
          <ClearPost postId={postId} onClick={onClick} />
        </div>
        <hr />
        <p className="post-description">{description}</p>
      </div>
    )
  }
}
