import React from 'react';
import { Link } from 'react-router-dom';
import { tours } from '../../data/Data';

const WeeklyOffers = () => {
  return (
    <div className="weekly-offers amazing-deals">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading text-center">
              <h2>Best Weekly Offers In Each City</h2>
              <p>
              Escape the Ordinary: Find Your Bliss
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {tours.map((item) => (
            <div key={item.id} className="col-lg-6">
              <div className="item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="image">
                      <img
                        style={{ height: '25rem', objectFit: 'cover' }}
                        src={item.img}
                        alt=""
                      />
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
                      <p>{item.description.slice(0, 100)}</p>
                      <div className="main-button">
                        <Link to="/reservation">Make a Reservation</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )).slice(4,9)}
        </div>
      </div>
    </div>
  );
};

export default WeeklyOffers;
