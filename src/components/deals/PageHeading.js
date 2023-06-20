import React from 'react'
import { Link } from 'react-router-dom'

export default function PageHeading() {
  return (
    <>
      <div className="page-heading">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h4>Discover Our Weekly Offers</h4>
          <h2>Amazing Prices &amp; More</h2>
          <div className="border-button"><Link to="/about">Discover More</Link></div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
