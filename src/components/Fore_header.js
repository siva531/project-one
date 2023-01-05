import React, { Component } from 'react'

export class Fore_header extends Component {
  render() {
    return (
      <div>
        <header className='fore-header row mb-2'>
          <div className='col-md-2 col-xs-12'>
            <h5>My Account</h5>
          </div>
          <div className='col-md-8 col-xs-12 text-center'>
            <div className="alert alert-success m-0 py-1 px-5 d-inline-block" role="alert">
              Success Message Here
            </div>
          </div>
          <div className='col-md-2 col-xs-12 pe-0 view-btn'>
            <button type="button" className="btn btn-dark btn-sm float-end">View Button</button>
            </div>
      </header>
      </div>
    )
  }
}

export default Fore_header