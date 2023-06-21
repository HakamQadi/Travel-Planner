import React from 'react'
import { Link } from 'react-router-dom'
import { tours } from '../../data/Data'

const VisitCountry = () => {
  return (
    <div>
      <div className="visit-country">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading">
                <h2>Discover the Wonders of Our Touristic Sites Today!</h2>
                <p>Create Your Story: Let the Journey Begin.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="items">
                <div className="row">
                  {/* card */}

                  <div className="col-lg-12" >
                    {tours.map((item) => {
                      return (
                        <div key={item.id} className="item">
                          <div className="row">
                            <div className="col-lg-4 col-sm-5">
                              <div className="image">
                                <img src={item.img} style={{height:'22rem',objectFit:'cover'}} alt="" />
                              </div>
                            </div>
                            <div className="col-lg-8 col-sm-7">
                              <div className="right-content">
                                <h4>{item.name}</h4>
                                <span>{item.category}</span>
                                <div className="main-button">
                                  <Link to="/about">Explore More</Link>
                                </div>
                                <p>{item.description}</p>
                                <ul className="info">
                                  <li><i className="fa fa-star"></i> {item.rate}</li>
                                  <li><i className="fa fa-dollar"></i>{item.price}</li>
                                </ul>
                                <div className="text-button">
                                  <Link to="/about">Need Directions ? <i className="fa fa-arrow-right"></i></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    }).slice(0,3)}


                  </div>

                  {/* navigation numbers */}
                  <div style={{marginBottom:'5rem'}} className="col-lg-12">
                    <ul className="page-numbers">
                      <li><Link to="/"><i className="fa fa-arrow-left"></i></Link></li>
                      <li><Link to="/">1</Link></li>
                      <li className="active"><Link to="/">2</Link></li>
                      <li><Link to="/">3</Link></li>
                      <li><Link to="/"><i className="fa fa-arrow-right"></i></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="side-bar-map">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="map">
                      <iframe title='/' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433868.6382314492!2d35.61796774856914!3d31.835918820475523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5fb85d7981af%3A0x631c30c0f8dc65e8!2sAmman!5e0!3m2!1sen!2sjo!4v1687342178513!5m2!1sen!2sjo" width="100%" height="550px" frameborder="0" style={{ border: '0', borderRadius: '23px' }} allowfullscreen=""></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisitCountry
