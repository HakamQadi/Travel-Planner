import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
       <header class="header-area header-sticky">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <nav class="main-nav">
                    <Link to="/" class="logo">
                        <img src="assets/images/logo.png" alt=""/>
                    </Link>
                    <ul class="nav">
                        <li><NavLink to="/" class="active">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/deals">Deals</NavLink></li>
                        <li><NavLink to="/reservation">Reservation</NavLink></li>
                        <li><Link to="/reservation">Book Yours</Link></li>
                    </ul>   
                    <a href='/' class='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>
    </div>
  )
}

export default Header
