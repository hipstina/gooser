import React, { Component } from 'react'
import axios from 'axios'

export default class ClearPost extends Component {
  render() {
    return (
      <div>
        <button onClick={this.deletePost}>Clear</button>
      </div>
    )
  }
}
