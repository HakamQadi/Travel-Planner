import React, { useState } from 'react'
import { tours } from '../../data/Data'
import './deals.css'
import { Link } from 'react-router-dom'





export default function AmazingDeals() {
 
  const [filteredList, setFilteredList] = useState(tours)

  const search =(event)=>{
    let query = event.target.value;

    let updatedList = tours.filter((item)=>{
      return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
setFilteredList(updatedList)
  }
 
  return (
    <>


      {/* search */}

      <div className="search-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{
              display: 'flex',
              justifyContent: 'center'
            }} >
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-4">
                    <fieldset >
                      <div className="search-box">
                        <button className="btn-search"><i className="fas fa-search"></i></button>
                        <input type="text" className="input-search" 
                        onChange={search} placeholder="Type to Search..." />
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
      {/* amazing */}
      < div className="amazing-deals" >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading text-center">
                <h2>Check our offers</h2>
              </div>
            </div>
            {filteredList.map((item) => {
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
            <div className="col-lg-12">
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
      </div >

    </>
  )
}
