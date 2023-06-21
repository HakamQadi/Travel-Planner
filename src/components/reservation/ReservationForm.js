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
      <div className={`reservation-form ${blurPage ? "blur" : ""}`}>
        <div className="reservation-form">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="map">
                  <iframe
                    title="any"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth"
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
                <form
                  style={{
                    position: 'relative',
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
                          {tours.map((option, index) => (
                            <option value={option.name} key={index}>
                              {option.name}
                            </option>
                          ))}
                        </select>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button className="main-button" type="submit">
                          Make Your Reservation Now
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
      {reservationSuccess && (
        <div className="reservation-success">
          <div className="reservation-success-content">
            <h3>Reservation Successful!</h3>
            <p>Thank you for making your reservation. Here are the details:</p>
            {reservationData && (
              <>
                <p>
                  <strong>Name:</strong> {reservationData.name}
                </p>
                <p>
                  <strong>Number:</strong> {reservationData.number}
                </p>
                <p>
                  <strong>Number Of Guests:</strong> {reservationData.guests}
                </p>
                <p>
                  <strong>Check In Date:</strong> {reservationData.checkInDate}
                </p>
                <p>
                  <strong>Destination:</strong> {reservationData.destination}
                </p>
              </>
            )}
            <button onClick={closeSuccessMessage}>Done</button>
          </div>
        </div>
      )}


    </>
  );
}

export default ReservationForm;
