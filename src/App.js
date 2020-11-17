import React, { Component } from 'react'
import Search from './Search'
import Giphys from './Giphys'

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Giphy!</h1>
        <Search />
        <Giphys />
      </>
    )
  }
}