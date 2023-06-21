import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (

        <header className="header-area header-sticky">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="main-nav">
                            <Link to="/" className="logo">
                                <img src="assets/images/logo.png" alt="" />
                            </Link>
                            <ul className="nav">
                                <li><NavLink to="/" >Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/deals">Deals</NavLink></li>
                                <li><NavLink to="/reservation">Reservation</NavLink></li>
                                <li><Link to="/reservation">Book Yours</Link></li>
                            </ul>
                            <div className='menu-trigger'>
                                <span>Menu</span>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
