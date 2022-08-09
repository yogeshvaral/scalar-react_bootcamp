/* eslint-disable no-template-curly-in-string */
import React, { Component } from 'react'
import Header from './Bootstrap/Header'

class App extends Component {
  state = {
    Dark:false,
    Name:""
  }
  togglerHeader = ()=>{
    // window.alert("Toggle Header Clicked")
    this.setState({
      Dark:!this.state.Dark
    })
  }
  changeHandler = (e)=>{
    this.setState({
      Name:e.target.value
    })
  }
  render() {
    return (
      <div className='App'>
        {/* <h1>Hello Scalar1</h1> */}
        {/* <Header>Scaler Portfolio Generator</Header> */}
        <Header dark={this.state.Dark} className="mb-5">Scaler Portfolio Generator</Header>
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <input type="text" className='form-control mb-3' value={this.state.Name}
               onChange={this.changeHandler} />
            </div>
            <div className='col-12 text-center'>
              <input type="text" className='form-control mb-3' value={this.state.Name}
               onChange={this.changeHandler} />
            </div>
            <div className='col-12 text-center'>
            {/* <button className={'btn btn${this.state.Dark ? "--outline" :""}-primary'} onClick={this.togglerHeader}>Toggle Dark Mode</button> */}
            <button className={`btn btn${this.state.Dark ? "-outline":""}-primary`}
             onClick={this.togglerHeader}>Toggle Dark Mode</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default App
