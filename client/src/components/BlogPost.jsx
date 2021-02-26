import React, { Component } from 'react'

export default class BlogPost extends Component {
  render(){
  const {author, description} = this.props
  return(
    <div className ="post">
      <p>{author}</p>
      <p>{description}</p>
    </div>
  )
  }
}