import React from 'react'

import Logo from "../../images/logo-white.svg";
import Facebook from "../../images/icon-facebook.svg";
import Twitter from "../../images/icon-twitter.svg";
import Pinterest from "../../images/icon-pinterest.svg";
import Instagram from "../../images/icon-instagram.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="left">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="right">
          <article className="company-links">
            <div className="features">
              <h4>Features</h4>
              <a href="/" className='company-link'>Link Shortening</a>
              <a href="/" className='company-link'>Branded Links</a>
              <a href="/" className='company-link'>Analytics</a>
            </div>
            <div className="resources">
              <h4>Resources</h4>
              <a href="/" className='company-link'>Blog</a>
              <a href="/" className='company-link'>Developers</a>
              <a href="/" className='company-link'>Support</a>
            </div>
            <div className="company">
              <h4>Company</h4>
              <a href="/" className='company-link'>About</a>
              <a href="/" className='company-link'>Our Team</a>
              <a href="/" className='company-link'>Careers</a>
              <a href="/" className='company-link'>Contact</a>
            </div>
          </article>
          <article className="social-links">
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
            <img src={Instagram} alt="" />
          </article>
        </div>
      </div>
    </footer>
  )
}

export default Footer