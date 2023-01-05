import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
      <div>
        <div className='col-md-12 profile rounded mb-3 p-3'>
            <div className='row'>
                <div className='col-md-4 col-xs-12'>
                    <div className='activity-wrapper d-flex flex-wrap'>
                        <div className="dropdown text-end">
                            <img src="https://github.com/mdo.png" alt="mdo" height="90" className="rounded-circle"/>
                            <div className='upload-icon'>
                            <i className="fa fa-camera position-absolute top-50 start-50 translate-middle" aria-hidden="true"></i>
                            </div>          
                        </div>
                        <div className='d-inline-block ms-3'>
                            <h4 className="fw-semibold activity user-title">John Smith</h4>
                            <div className="d-flex align-items-center">
                            <div className="text-muted location">
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                Main St. Farmington, CA 123
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8 col-xs-12 ps-0 fieldset-wrapper'>
                    <div className='row'>
                        <div className='col-md-5 col-xs-12 ps-0 fieldset-one'>
                            <div className="row">
                                <label htmlFor="firstName" className="col-md-4 col-xs-12 col-form-label">First Name:</label>
                                <div className="col-md-8 col-xs-12">
                                <input type="text" className="form-control form-control-sm form-control-xs" id="firstName"/>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="lastName" className="col-sm-4 col-form-label">Last Name:</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control form-control-sm" id="lastName"/>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-sm-4 col-form-label">Email:</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control form-control-sm" value="johnsmith@yahoo.com" disabled/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-xs-12 pe-0 fieldset-two'>
                            <div className="row">
                                <label htmlFor="phone" className="col-sm-4 col-form-label">Phone:</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control form-control-sm" id="phone"/>
                                </div>
                            </div>
                            <div className="row">
                                <label htmlFor="year" className="col-sm-4 col-form-label">Graduation Year:</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control form-control-sm" id="year"/>
                                </div>
                            </div>
                            <div className="row">
                                <label className="col-sm-4 col-form-label">Date of Birth:</label>
                                <div className="col-sm-8">
                                <input type="text" className="form-control form-control-sm" value="08/03/1960" disabled/>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-xs-12 btn-block'>
                        <button type="button" className="btn btn-success btn-sm d-inline float-end">Save Changes</button>
                        <button type="button" className="btn btn-dark btn-sm d-inline float-end">Change Password</button>
                        <button type="button" className="btn btn-danger btn-sm d-inline float-end">Leave Family</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Profile