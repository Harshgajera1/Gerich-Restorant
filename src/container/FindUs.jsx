import React from 'react'
import { Subheading } from '../components'
import { images } from '../Constants'

const FindUs = () => {
  return (
    <div className="app-bg section-main section-padding" id="contact">
      <div className="section-info">
        <Subheading title="Contact" />
        <h1 className="header-h1" style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div>
          <p className="p-opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
          <p className="p-cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
          <p className="p-opensans">Mon - Fri: 10:00 am - 02:00 am</p>
          <p className="p-opensans">Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button type="button" className="custom-button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </div>

      <div className="section-img">
        <img src={images.findus} alt="finus_img" />
      </div>
    </div>
  )
}

export default FindUs