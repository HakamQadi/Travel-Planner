import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <Link to="/" className="logo">
                <img src="assets/images/logo-no-background.png" alt="" />
              </Link>
              <ul className="nav">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/deals">Deals</NavLink>
                </li>
                <li>
                  <NavLink to="/reservation">Reservation</NavLink>
                </li>
                <li>
                  <Link className="header_btn" to="/reservation">Book Yours</Link>
                </li>
              </ul>
              <div className="menu-trigger">
                <span>Menu</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
