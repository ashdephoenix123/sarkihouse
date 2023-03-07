import React from 'react'
import {Link} from "react-router-dom"
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <span className='nav_text'><Link className='nav-link' to="/">sarki_house</Link></span>
            <ul className="nav-lists">
                <li className="nav-items"><Link className='nav-link' to="/">Home</Link></li>
                <li className="nav-items"><Link className='nav-link' to="/about">about</Link></li>
                <li className="nav-items"><Link className='nav-link' to="/products">products</Link></li>
                <li className="nav-items"><Link className='nav-link' to="/contact">contact</Link></li>
                <li className="nav-items"><button className='btn margin-right-2'>Log in</button></li>
                <li className="nav-items"><Link className='nav-link' to="/cart"><AiOutlineShoppingCart size={30}/><span>10</span></Link></li>

            </ul>
        </div>
    </>
  )
}

export default Navbar
