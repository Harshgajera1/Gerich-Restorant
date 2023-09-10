import React from 'react'
import { Subheading } from '../components'
import image from '../Constants/images'

const Header = () => {
  return (
    <div className='header section-main section-padding' id="home">

      <div className='section-info'>
        <Subheading title={'Chase the new Flavour'}/>
        <h1 className='header-h1'>The Key To Fine Dining</h1>
        <p className='p-opensans mt-2 mb-2'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button type='button' className='custom-button'>Explore Menu</button>
      </div>

      <div className='section-img'>
        <img src={image.welcome} alt='header-img'/>
      </div>
      
    </div>
  )
}

export default Header