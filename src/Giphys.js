import React, { Component } from 'react'
import Giphy from './Giphy'

export default class Giphys extends Component {
    
  render() {
    const giphys = this.props.giphys.map(giphy => {
        return <Giphy title={giphy.title} url={giphy.images.original.url} />
    })
    return (
      <>
        <h3>Giphys</h3>
        {giphys}
      </>
    )
  }
}