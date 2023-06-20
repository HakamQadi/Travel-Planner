import React from 'react'

function ReservationForm() {
  return (
    <>
      <div className="reservation-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="map">
                <iframe title='any' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="450px" frameborder="0"
                  style={{ border: '0', borderTopLeftRadius: '23px', borderTopRightRadius: '23px' }} allowfullscreen=""></iframe>
              </div>
            </div>
            <div className="col-lg-12">
              <form id="reservation-form" name="gs" method="submit" role="search" action="#">
                <div className="row">
                  <div className="col-lg-12">
                    <h4>Make Your <em>Reservation</em> Through This <em>Form</em></h4>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label for="Name" className="form-label">Your Name</label>
                      <input type="text" name="Name" className="Name" placeholder="Ex. John Smithee" autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label for="Number" className="form-label">Your Phone Number</label>
                      <input type="text" name="Number" className="Number" placeholder="Ex. +xxx xxx xxx" autocomplete="on" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label for="chooseGuests" className="form-label">Number Of Guests</label>
                      <select name="Guests" className="form-select" aria-label="Default select example" id="chooseGuests" onChange="this.form.click()">
                        <option selected>ex. 3 or 4 or 5</option>
                        <option type="checkbox" name="option1" value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <label for="Number" className="form-label">Check In Date</label>
                      <input type="date" name="date" className="date" required />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <label for="chooseDestination" className="form-label">Choose Your Destination</label>
                      <select name="Destination" className="form-select" aria-label="Default select example" id="chooseCategory" onChange="this.form.click()">
                        <option selected>ex. Switzerland, Lausanne</option>
                        <option value="Italy, Roma">Italy, Roma</option>
                        <option value="France, Paris">France, Paris</option>
                        <option value="Engaland, London">Engaland, London</option>
                        <option value="Switzerland, Lausanne">Switzerland, Lausanne</option>
                      </select>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button className="main-button">Make Your Reservation Now</button>
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

export default ReservationForm
