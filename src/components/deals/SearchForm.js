import React from 'react'

export default function SearchForm() {
  return (
    <>
      <div className="search-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form id="search-form" name="gs" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-2">
                    <h4>Sort Deals By:</h4>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <select name="Location" className="form-select" aria-label="Default select example" id="chooseLocation" onChange="this.form.click()">
                        <option selected>Destinations</option>
                        <option type="checkbox" name="option1" value="Italy">Italy</option>
                        <option value="France">France</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Australia">Australia</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-4">
                    <fieldset>
                      <select name="Price" className="form-select" aria-label="Default select example" id="choosePrice" onChange="this.form.click()">
                        <option selected>Price Range</option>
                        <option value="100">$100 - $250</option>
                        <option value="250">$250 - $500</option>
                        <option value="500">$500 - $1,000</option>
                        <option value="1000">$1,000 - $2,500</option>
                        <option value="2500+">$2,500+</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                    <fieldset>
                      <button className="border-button">Search Results</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
