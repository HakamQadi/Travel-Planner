import React from 'react'

function MoreInfo() {
  return (
    <>
      <div className="more-info reservation-info">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-phone"></i>
            <h4>Make a Phone Call</h4>
            <a href="/">+123 456 789 (0)</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-envelope"></i>
            <h4>Contact Us via Email</h4>
            <a href="/">company@email.com</a>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6">
          <div className="info-item">
            <i className="fa fa-map-marker"></i>
            <h4>Visit Our Offices</h4>
            <a href="/">24th Street North Avenue London, UK</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default MoreInfo
