import React, { useState, useEffect } from "react";
import { tours } from "../../data/Data";
import "./res.css";

function ReservationForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [guests, setGuests] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [destination, setDestination] = useState("");
  const [nameError, setNameError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [reservationSuccess, setReservationSuccess] = useState(false);
  const [reservationData, setReservationData] = useState(null);
  const [blurPage, setBlurPage] = useState(false); // State variable for blur effect

  useEffect(() => {
    const savedData = localStorage.getItem("reservationData");
    if (savedData) {
      setReservationData(JSON.parse(savedData));
    }
  }, []);

  function validateForm(event) {
    event.preventDefault();

    let valid = true;

    if (name.length < 3) {
      setNameError("Name must be at least 3 letters long");
      valid = false;
    } else {
      setNameError("");
    }

    if (!number.startsWith("+") || number.length !== 14) {
      setNumberError("Number must start with '+' and be 14 characters long");
      valid = false;
    } else {
      setNumberError("");
    }

    if (valid) {
      const reservationData = {
        name,
        number,
        guests,
        checkInDate,
        destination,
      };
      const savedData = localStorage.getItem("reservationData");
      let reservations = [];
      if (savedData) {
        reservations = JSON.parse(savedData);
      }
      reservations.push(reservationData);
      localStorage.setItem("reservationData", JSON.stringify(reservations));

      setName("");
      setNumber("");
      setGuests("");
      setCheckInDate("");
      setDestination("");

      setReservationSuccess(true);
      setReservationData(reservationData);
      setBlurPage(true); // Enable the blur effect
    }
  }

  function closeSuccessMessage() {
    setReservationSuccess(false);
    setBlurPage(false); // Disable the blur effect
  }

  return (
    <>
      <div className={`reservation-page ${blurPage ? "blur" : ""}`}>
        <div className="second-page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h4>Book Prefered Deal Here</h4>
                <h2>Make Your Reservation</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt uttersi labore et dolore magna
                  aliqua is ipsum suspendisse ultrices gravida
                </p>
                <div className="main-button">
                  <a href="about.html">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="more-info reservation-info">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="info-item">
                  <i className="fa fa-phone"></i>
                  <h4>Make a Phone Call</h4>
                  <a href="/">+123 456 789 (0)</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="info-item">
                  <i className="fa fa-envelope"></i>
                  <h4>Contact Us via Email</h4>
                  <a href="/">company@email.com</a>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="info-item">
                  <i className="fa fa-map-marker"></i>
                  <h4>Visit Our Offices</h4>
                  <a href="/">24th Street North Avenue London, UK</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reservation-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe
                    title="any"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13541.182439619848!2d35.92971506183624!3d31.952876190921465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f86956dc02d%3A0xa9edbdbd70c4d41c!2z2KzYqNmEINi52YXYp9mG2Iwg2LnZhdmR2KfZhg!5e0!3m2!1sar!2sjo!4v1687349991175!5m2!1sar!2sjo"
                    width="100%"
                    height="450px"
                    frameBorder="0"
                    style={{
                      border: "0",
                      borderTopLeftRadius: "23px",
                      borderTopRightRadius: "23px",
                    }}
                    allowFullScreen=""
                  ></iframe>
                </div>
              </div>
              <div className="col-lg-12">
                <div className={`reservation-form ${blurPage ? "blur" : ""}`}>
                  <form
                    style={{
                      position: "relative",
                    }}
                    id="reservation-form"
                    name="gs"
                    method="submit"
                    role="search"
                    action="#"
                    onSubmit={validateForm}
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h4>
                          Make Your <em>Reservation</em> Through This{" "}
                          <em>Form</em>
                        </h4>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Name" className="form-label">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="Name"
                            className="Name"
                            placeholder="Enter Your Name ..."
                            autoComplete="on"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                          {nameError && (
                            <span className="error" style={{ color: "red" }}>
                              {nameError}
                            </span>
                          )}
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Number" className="form-label">
                            Your Phone Number
                          </label>
                          <input
                            type="text"
                            name="Number"
                            className="Number"
                            placeholder="Ex. +xxx xxx xxx"
                            autoComplete="on"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                          />
                          {numberError && (
                            <span className="error" style={{ color: "red" }}>
                              {numberError}
                            </span>
                          )}
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="chooseGuests" className="form-label">
                            Number Of Guests
                          </label>
                          <select
                            name="Guests"
                            className="form-select"
                            aria-label="Default select example"
                            id="chooseGuests"
                            required
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                          >
                            <option value="">How Many Guests</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                          </select>
                        </fieldset>
                      </div>
                      <div className="col-lg-6">
                        <fieldset>
                          <label htmlFor="Number" className="form-label">
                            Check In Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            className="date"
                            required
                            value={checkInDate}
                            onChange={(e) => setCheckInDate(e.target.value)}
                          />
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <label
                            htmlFor="chooseDestination"
                            className="form-label"
                          >
                            Choose Your Destination
                          </label>
                          <select
                            name="Destination"
                            className="form-select"
                            aria-label="Default select example"
                            id="chooseCategory"
                            required
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                          >
                            <option value="">Select Destination</option>
                            {tours.map((tour) => (
                              <option key={tour.id} value={tour.name}>
                                {tour.name}
                              </option>
                            ))}
                          </select>
                        </fieldset>
                      </div>
                      <div className="col-lg-12">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="main-button"
                          >
                            Make Reservation
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {reservationSuccess && (
        <div className="reservation-success">
          <div className="reservation-success-message">
            <h2>Reservation Successful!</h2>
            <p>
              Thank you, <span>{reservationData.name}</span>, for making a
              reservation with us. We look forward to welcoming you and your{" "}
              <span>{reservationData.guests}</span> guests to{" "}
              <span>{reservationData.destination}</span> on{" "}
              <span>{reservationData.checkInDate}</span>.
            </p>
            <button className="close-button" onClick={closeSuccessMessage}>
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ReservationForm;
