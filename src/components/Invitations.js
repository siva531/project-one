import React, { Component } from 'react'

export class Invitations extends Component {
  render() {
    return (
      <div className='col-md-12 p-0'>        
        <div className='p-2 invite-block rounded'>
            <div className='float-start invite-block-header w-100 mb-3'>
                <h6 className='float-start'>Invitations</h6>
                <div className='btn-block float-end'>
                    <button type="button" className="btn btn-success btn-sm sent-btn d-inline">Sent (15)</button>
                    <button type="button" className="btn btn-success receive-btn btn-sm d-inline position-relative">
                        Received (5)
                        <i className="fa fa-caret-down" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            <div className='float-start invite-block-body'>
                <div className='row'>
                    <div className='col-12 invite-wrapper'>
                        <div className='invite-item mb-2'>
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start m-2"/>
                            <h6 className="fw-semibold float-start mt-2 m-0 invite-text">
                                <span className='txt-orange'>John Smith </span>
                                have invited you to become his family member.
                            </h6>
                            <button type="button" className="btn btn-danger btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className='invite-item mb-2'>
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start m-2"/>
                            <h6 className="fw-semibold float-start mt-2 m-0 invite-text">
                                <span className='txt-orange'>John Smith </span>
                                have invited you to become his family member.
                            </h6>
                            <button type="button" className="btn btn-danger btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className='invite-item mb-2'>
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start m-2"/>
                            <h6 className="fw-semibold float-start mt-2 m-0 invite-text">
                                <span className='txt-orange'>John Smith </span>
                                have invited you to become his family member.
                            </h6>
                            <button type="button" className="btn btn-danger btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </div>
                        <div className='invite-item mb-2'>
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle float-start m-2"/>
                            <h6 className="fw-semibold float-start mt-2 m-0 invite-text">
                                <span className='txt-orange'>John Smith </span>
                                have invited you to become his family member.
                            </h6>
                            <button type="button" className="btn btn-danger btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-times" aria-hidden="true"></i>
                            </button>
                            <button type="button" className="btn btn-success btn-sm user-btn me-2 d-inline float-end">
                                <i className="fa fa-check" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Invitations