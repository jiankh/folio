import React from 'react';
import './Navbar.scss'; 

const Navbar = ({ isVisible }) => {
    return (
        <div
            className={`navbar ${isVisible ? 'visible' : 'hidden'}`}
        >

            <div className="wrapper">
                <div className="logo">
                    jeanh
                </div>

                <span>
                    <a href="#about">about</a>
                    <a href="#technology">technology</a>
                    <a href="#project">projects</a>
                    <a href="#contact">contact</a>
                </span>
            </div>
        </div>
    )
}

export default Navbar;