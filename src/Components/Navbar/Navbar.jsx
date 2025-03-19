import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>Nithya P</h1>
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Skills</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="connect-btn">Connect with Me</div>
        </div>
    )
}

export default Navbar