import React from "react";
import { tours } from "../../data/Data";
import { Link, useParams } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const watch = tours.find((info) => info.id === Number(id));

  return (
    <div
      className="container amazing-deals "
      style={{
        width: "50rem",
        marginBottom: "107px",
      }}
    >
      <div className="col-lg-12 col-sm-12 ">
        <div className="item">
          <div className="row">
            <div className="col-lg-6">
              <div className="image">
                <img
                  style={{ height: "25rem", objectFit: "cover" }}
                  src={watch.img}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content">
                <h4 className="amazing">{watch.name}</h4>
                <p>{watch.description}</p>
                <div className="main-button">
                  <Link to="/reservation">Make a Reservation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
