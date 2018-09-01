import React, { Component } from "react"

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleSearch (e) {
    this.setState({ url: e.target.value })
  }

  handleGoClick (e) {
    // do something
  }

  render () {
    return (
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='Enter URL . . .'
            onChange={this.handleSearch.bind(this)}
            value={this.state.url}
          />
          <button
            type='submit'
            onClick={this.handleGoClick.bind(this)}>
            Search
          </button>
        </form>
    )
  }
}

export default SearchBar