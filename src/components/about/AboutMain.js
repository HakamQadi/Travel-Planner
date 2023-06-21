import React from 'react'
import { Link } from 'react-router-dom'

const AboutMain = () => {
    return (
        <>
            <div className="about-main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="content">
                                <div className="blur-bg"></div>
                                <h4>EXPLORE OUR PLANET</h4>
                                <div className="line-dec"></div>
                                <h2>Welcome</h2>
                                <p>Embark on Unforgettable Escapes: Where Memories are Made</p>
                                <div className="main-button">
                                    <Link to="/reservation">Discover More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMain
