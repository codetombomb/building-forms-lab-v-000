// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
      state = {
      name: ''
    }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand({type: 'ADD_BAND', payload: this.state })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <label>Enter Band Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput;
