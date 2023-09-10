import React from 'react'
import { FooterOverlay, Newsletter } from '../components'
import images from '../Constants/images'
import { FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="footer section-padding" id="login">
      {/* <FooterOverlay />
      <Newsletter /> */}

      <div className="footer-links">
        <div className="footer-links-contact">
          <h1 className="header-h1">Contact Us</h1>
          <p className="p-opensans">9 W 53rd St, New York, NY 10019, USA</p>
          <p className="p-opensans">+1 212-344-1230</p>
          <p className="p-opensans">+1 212-555-1230</p>
        </div>

        <div className="footer-links-logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p-opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} className="spoon-img" style={{ marginTop: 15 }} />
          <div className="footer-links-icons">
            <a href='https://in.linkedin.com/in/harsh-gajera-829825224' target='_blank'><FiLinkedin /></a>
            <a href='https://harshgajera.in/' target='_blank'><TbWorldWww /></a>
            <a href='https://www.instagram.com/invites/contact/?i=1win0weh73p7k&utm_content=8bs2ob0' target='_blank'><FiInstagram /></a>
          </div>
        </div>

        <div className="footer-links-work">
          <h1 className="footer-headtext">Working Hours</h1>
          <p className="p-opensans">Monday-Friday:</p>
          <p className="p-opensans">08:00 am - 12:00 am</p>
          <p className="p-opensans">Saturday-Sunday:</p>
          <p className="p-opensans">07:00 am - 11:00 pm</p>
        </div>
      </div>

      <div className="footer-copyright">
        <p className="p-opensans">©2023 demo. All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer