import { useState } from 'react'

import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "../../images/logo.svg";
import "./Navbar.scss";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(true);

  const handleClick = (e) => {
    setMenuOpen(!menuOpen)
  }

  const handleBlurEvent = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`nav`}>
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="hamburger" onBlur={handleBlurEvent} onClick={handleClick}>
        <GiHamburgerMenu size={`30px`} color={`gray`}  />
      </div>
      <div className={`nav-links${menuOpen ? " close" : ""}`}>
        <ul className="left">
          <li><a href="/">Features</a></li>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Resources</a></li>
        </ul>
        <div className="divider"></div>
        <div className="right">
          <div className="login">Login</div>
          <div className="sign-up">
            Sign Up
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar