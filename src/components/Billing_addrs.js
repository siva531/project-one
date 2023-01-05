import React, { Component } from 'react'

export class Billing_addrs extends Component {
  render() {
    return (
      <div className='col-12 pe-0 billing-addr-wrapper'>
      <div className='billing-addr rounded p-2'>
        <h6>Billing Address</h6>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked/>
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Same as Home Address
          </label>
        </div>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="firstname" className="form-label">First Name:</label>
              <input type="text" className="form-control form-control-sm" id="firstname" placeholder="First Name"/>
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="lastname" className="form-label">Last Name:</label>
              <input type="text" className="form-control form-control-sm" id="lastname" placeholder="Last Name"/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="addrLineOne" className="form-label">Address Line 1:</label>
              <input type="text" className="form-control form-control-sm" id="addrLineOne" placeholder="Address Line 1"/>
            </div>
          </div>
          <div className='col-md-6 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="addrLineTwo" className="form-label">Address Line 2:</label>
              <input type="text" className="form-control form-control-sm" id="addrLineTwo" placeholder="Address Line 2"/>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-3 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="country" className="form-label">Country:</label>
              <input type="text" className="form-control form-control-sm" id="country" value="US" disabled/>
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <div className="mb-1">
              <label className="form-label">State/Province/Region:</label>
              <select className="form-select form-select-sm">
                <option>Select</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
              </select>
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="city" className="form-label">City:</label>
              <input type="text" className="form-control form-control-sm" id="city" placeholder="Enter city name"/>
            </div>
          </div>
          <div className='col-md-3 col-xs-12'>
            <div className="mb-1">
              <label htmlFor="zipcode" className="form-label">Zip Code:</label>
              <input type="text" className="form-control form-control-sm" id="zipcode" placeholder="Enter zip code"/>
            </div>
          </div>
        </div>
        
        <div className='row'>
          <div className='col-12'>
          <button type="button" className="btn btn-dark btn-sm float-end">Edit Details</button>
          </div>
        </div>
      </div></div>
    )
  }
}

export default Billing_addrs