import React, { Component } from 'react'

export default class Giphy extends Component {
  render() {
    return (
      <>
        <div>
            <img src={this.props.url} alt={this.props.title} width="250" height="300" />
        </div>
      </>
    )
  }
}