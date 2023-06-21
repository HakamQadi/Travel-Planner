import React from 'react'
import { tours } from '../../data/Data'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    // const { id } = useParams();
    return (
        <div className='amazing-deals'>
            <div className='container'>
            {tours.map((item) => {
                return (
                    <div className="col-lg-6 col-sm-6">
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image">
                                        <img style={{ height: '25rem', objectFit: 'cover' }} src={item.img} alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-6 align-self-center">
                                    <div className="content">
                                        <span className="info">*Limited Offer Today</span>
                                        <h4>{item.name}</h4>
                                        <div className="row">
                                            <div className="col-6">
                                                <i className="fa fa-clock"></i>
                                                <span className="list">5 Days</span>
                                            </div>
                                            <div className="col-6">
                                                <i className="fa fa-map"></i>
                                                <span className="list">Daily Places</span>
                                            </div>
                                        </div>
                                        <p >{item.description.slice(0, 100)}</p>
                                        <div className="main-button">
                                            <Link to="/reservation">Make a Reservation</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Details
