import React from 'react'
import { Link } from 'react-router-dom'

const MoreAbout = () => {
    return (
        <>
            <div className="more-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-image">
                                <img src="assets/images/about-left-image.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Discover More About Our Country</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-item">
                                        <h4>150.640 +</h4>
                                        <span>Total Guests Yearly</span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-item">
                                        <h4>175.000+</h4>
                                        <span>Amazing Accomoditations</span>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="info-item">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h4>12.560+</h4>
                                                <span>Amazing Places</span>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4>240.580+</h4>
                                                <span>Different Check-ins Yearly</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                            <div className="main-button">
                                <Link to="/reservation">Discover More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MoreAbout
