import React from 'react'
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/'
import './navbar.css'

const Navbar = () => {
    const Menu = () => (
        <>
            <p><a href='#home'>Home</a></p>
              <p><a href='#service'>Services</a></p>
              <p><a href='#products'>Products</a></p>
              <p><a href='#blog'>Who we are? </a></p>
              <p><a href='#contact'>Contact</a></p>
        </>
      )
    
    
      const [toggleMenu, setToggleMenu]=useState(false);
      return (
        <div className='webapp__navbar'>
          <div className='webapp__navbar-links'>
            <div className='webapp__navbar-links-logo'>
              <h1>Edges Salon</h1>
              {/* <img src={logo} alt='logo'/> */}
            </div>
            <div className='webapp__navbar-links_container'>
              <Menu />
            </div>
          </div>
          <div className='webapp__navbar-sign'>
            {/* <p>Sign in</p> */}
            <button type='button'>Book Now !</button>
          </div>
          <div className='webapp__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line  color="#fff" size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (<div className='webapp__navbar-menu_container scale-up-center'>
              <div className='webapp__navbar-menu_container-links'>
                <Menu />
                <div className='webapp__navbar-menu_container-links-sign'>
                  <p>Book Now</p>
                  <button type='button'>Book Now</button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      )
}

export default Navbar;