import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <input type='text' 
                 value={this.props.searchString}
                 onChange={this.props.onChange}
                 />
          <button type="submit">Get Git</button>
        </form>
      </>
    )
  }
}