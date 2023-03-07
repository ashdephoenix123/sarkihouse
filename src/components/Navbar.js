import React from 'react'
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {

  const uncheck = () => {
    document.getElementById('navigation-toggle').checked=false;
  }
  return (
    <>
      <div className="navbar">
        <span className='nav_text'><Link className='nav-link' to="/">sarki_house</Link></span>
        
        <div className="navigation">
          <input type="checkbox" className='navigation__checkbox' id="navigation-toggle" />

          <label htmlFor="navigation-toggle" className="navigation__button">
            <span className='navigation__icon'>&nbsp;</span>
          </label>

          <div className="navigation__background">&nbsp;</div>

          <nav className="navigation__nav">
            <ul className="navigation__lists">
              <li className="navigation__items"><Link onClick={uncheck} to="/" className="navigation__link">home</Link></li>
              <li className="navigation__items"><Link onClick={uncheck} to="/about" className="navigation__link">about</Link></li>
              <li className="navigation__items"><Link onClick={uncheck} to="/products" className="navigation__link">products</Link></li>
              <li className="navigation__items"><Link onClick={uncheck} to="/contact" className="navigation__link">contact</Link></li>
              <li className="navigation__items"><button onClick={uncheck} className='btn'>Log In</button></li>
            </ul>
          </nav>
        </div>
        <ul className="nav-lists">
          <li className="nav-items"><Link className='nav-link' to="/">Home</Link></li>
          <li className="nav-items"><Link className='nav-link' to="/about">about</Link></li>
          <li className="nav-items"><Link className='nav-link' to="/products">products</Link></li>
          <li className="nav-items"><Link className='nav-link' to="/contact">contact</Link></li>
          <li className="nav-items"><button className='btn margin-right-2'>Log in</button></li>
          <li className="nav-items"><Link className='nav-link' to="/cart"><AiOutlineShoppingCart size={30} /><span>10</span></Link></li>

        </ul>
      </div>
    </>
  )
}

export default Navbar
