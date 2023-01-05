import React, { Component } from 'react'

export class Bank_acct extends Component {
  render() {
    return (
      <div className='col-md-12 pe-0'>
      <div className='bank-acct rounded mb-3 p-2'>
        <h6>Bank Account</h6>
            <div className="d-inline-flex p-2 m-2 rounded align-items-center bg-white">
              <img src="../assets/img/mastercard.svg" alt="" className="me-4"/>
              <div className='text-start'>
                <div className="fs-5 fw-normal">**** **** **** 5967</div>
                <div className="fs-6 fw-normal text-gray">Expires 09/27</div>
              </div>
            </div>
            <div className="d-inline-flex p-2 m-2 rounded align-items-center bg-white">
              <img src="../assets/img/mastercard.svg" alt="" className="me-4"/>
              <div className='text-start'>
                <div className="fs-5 fw-normal">**** **** **** 5967</div>
                <div className="fs-6 fw-normal text-gray">Expires 09/27</div>
              </div>
            </div>
        </div></div>
    )
  }
}

export default Bank_acct