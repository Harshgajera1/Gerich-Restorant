import React from 'react'
import { images } from '../Constants'
import { Subheading } from '../components'

const Chef = () => {
  return (
    <div className="app-bg section-main section-padding">
      <div className="section-img section-img-reverse">
        <img src={images.chef} alt="chef_image" />
      </div>
      
      <div className="section-info">
        <Subheading title="Chef's word" />
        <h1 className="headtext-cormorant">What we believe in</h1>

        <div className="chef-content">
          <div className="chef-content-quote">
            <img src={images.quote} alt="quote_image" />
            <p className="p-opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p className="p-opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
        </div>

        <div className="chef-sign">
          <p>Kevin Luo</p>
          <p className="p-opensans">Chef & Founder</p>
          <img src={images.sign} alt="sign_image" />
        </div>
      </div>
    </div>
  )
}

export default Chef