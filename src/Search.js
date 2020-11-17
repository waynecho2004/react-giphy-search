import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <>
        <form>
          <input type='text' id="searchStr"></input>
          <button>Get Git</button>
        </form>
      </>
    )
  }
}