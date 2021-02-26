import React, { Component } from 'react'
import ClearPost from './ClearPost'

export default class BlogPost extends Component {
  render() {
    const { author, description, createdAt, postId } = this.props

    const timestamp = createdAt
    const date = new Date(timestamp)
    const created = date.toDateString()

    return (
      <div className="post">
        <div className="post-details">
          <p className="post-author">Author: {author}</p>
          <p className="post-creation">Published: {created}</p>
          <ClearPost postId={postId} />
        </div>

        <p className="post-description">{description}</p>
      </div>
    )
  }
}
