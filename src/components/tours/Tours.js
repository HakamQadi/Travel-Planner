import React from "react";
import "./tours.css";

function Tours() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="box_style_cat">
              <ul id="cat_nav">
                <li>
                  <a href="/">
                    <i class="fa-brands fa-discourse"></i>
                    All tours<span>(141)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-spinner"></i>
                    City sightseeing<span>(20)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-city"></i>
                    Museum tours<span>(16)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-building-columns"></i>
                    Historic Buildings<span>(12)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-map-location-dot"></i>
                    Walking tours<span>(11)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-kitchen-set"></i>
                    Eat & Drink<span>(20)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-tower-observation"></i>
                    Churces<span>(08)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i class="fa-solid fa-plane-up"></i>
                    Skyline tours<span>(11)</span>
                    <i class="fa-solid fa-chevron-right arrow_icon"></i>{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-9">
            <div className="row">
              <div className="col-6">
                <h1>wajde</h1>
              </div>
              <div className="col-6">
                <h1>wajde</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tours;
