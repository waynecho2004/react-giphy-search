import React, { Component } from 'react'
import Search from './Search'
import Giphys from './Giphys'

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchString: '',
      giphys: [],
    }
  }

  handleSearchChange = (e) => {
    // const textValue = e.target.value;
    // console.log('search string ', textValue);
    this.setState({searchString: e.target.value});
  }

  handleSubmit = (e) => {
    console.log('search string entered: ' + this.state.searchString);
    e.preventDefault()
  }

  render() {
    return (
      <>
        <h1>Giphy!</h1>
        <Search 
          searchString={this.state.searchString}
          onSubmit={this.handleSubmit} 
          onChange={this.handleSearchChange}/>
        <Giphys />
      </>
    )
  }
}