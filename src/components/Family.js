import React, { Component } from 'react'

export class Family extends Component {
  render() {
    return (
      <div className='col-md-12 mb-3 p-0'>
        <div className='family-block rounded p-2'>
            <div className='row'>
                <div className='col-12'>
                    <h6 className='float-start'>Family</h6>
                    <button type="button" className="btn btn-success btn-sm d-inline float-end">Add New</button>
                    <i className="fa fa-search float-end" aria-hidden="true"></i>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 family-member-wrapper'>
                    <div className='family-member-item active mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">John Smith</h6>
                        <button type="button" className="btn btn-success btn-sm user-btn me-3 d-inline float-end">
                            <i className="fa fa-users" aria-hidden="true"></i>
                        </button>
                        <button type="button" className="btn btn-success btn-sm mx-2 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">John Smith</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">Dianne Russell</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">Lisa Smith</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">Sean Michaletz</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">Dianne Russell</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                    <div className='family-member-item mb-2'>
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start my-2 ms-3 me-2"/>
                        <h6 className="fw-semibold float-start mt-2 m-0 lh-25">Lisa Smith</h6>
                        <button type="button" className="btn btn-success btn-sm me-3 d-inline float-end text-uppercase">Admin</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Family