import React from 'react'
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <>
      <div className="call-to-action">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Are You Looking To Travel ?</h2>
              <h4>Make A Reservation By Clicking The Button</h4>
            </div>
            <div className="col-lg-4">
              <div className="border-button">
                <Link to="/reservation">Book Yours Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
