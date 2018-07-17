import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    // initialize the parent class which is Component
    super(props)

    this.state = {
      currentValue : 0
    }

    // bindings
  //  this.handleTripTextBoxChange = this.handleTripTextBoxChange.bind(this)

  }

  handleAddButtonClick = (() => {

    let newADD = this.state.currentValue + 1

    // ...this.state

    this.setState({
      ...this.state,
      currentValue : newADD
    })

  })

  handleSubtractButtonClick = (() => {

    let newSUB = this.state.currentValue - 1

    // ...this.state

    this.setState({
      ...this.state,
      currentValue : newSUB
    })

  })

  render() {
    return (
      <div className='wrapper'>
        <button onClick={this.handleSubtractButtonClick} className='control-btn'> - </button>
        <div className='num-display'>{this.state.currentValue}</div>
        <button onClick={this.handleAddButtonClick} className='control-btn'> + </button>
      </div>
    );
  }
}

export default App;
