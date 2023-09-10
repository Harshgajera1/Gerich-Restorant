import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../Constants/images'

export const Navbar = () => {

  const[toggleMenu,setToggleMenu] = useState(true)

  return (
    <nav className='app-navbar'>

      <div className='app-navbar-logo'>
        <img src={images.gericht} alt='app logo'></img>
      </div>

      <ul className='app-navbar-links'>
        <li className='p-opensans'><a href='#home'>Home</a></li>
        <li className='p-opensans'><a href='#about'>About</a></li>
        <li className='p-opensans'><a href='#menu'>Menu</a></li>
        <li className='p-opensans'><a href='#awards'>Awards</a></li>
        <li className='p-opensans'><a href='#contact'>Contact</a></li>
      </ul>

      <div className='app-navbar-login'>
        <a href='#login' className='p-opensans'>Log In / Register</a>
        <div/>
        <a href='/' className='p-opensans'>Book Table</a>
      </div>

      <div className='app-navbar-smallscreen'>
        {
          toggleMenu && <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{setToggleMenu(false)}}></GiHamburgerMenu>
        }

        {
        !toggleMenu && <div className='app-navbar-smallscren-overlay flex-center slide-bottom'>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay-close' onClick={()=>{setToggleMenu(true)}}></MdOutlineRestaurantMenu>
          <ul className='app-navbar-smallscren-links'>
            <li className='p-opensans'><a href='#home'>Home</a></li>
            <li className='p-opensans'><a href='#about'>About</a></li>
            <li className='p-opensans'><a href='#menu'>Menu</a></li>
            <li className='p-opensans'><a href='#awards'>Awards</a></li>
            <li className='p-opensans'><a href='#contact'>Contact</a></li>
          </ul>
          </div>
        }
      </div>

    </nav>
  )
}

export default Navbar