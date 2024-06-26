import React, { Component } from 'react'
// import myImage from './download.jpg'; 
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>

        <img src={loading} alt="loading" />
      </div>
    )
  }
}

export default Spinner
