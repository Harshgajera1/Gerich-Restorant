import React from 'react'
import image from '../../Constants/images'

const Subheading = (props) => {
  return (
    <div className='mb-1'>
      <p className='p-cormorant'>{props.title}</p>
      <img src={image.spoon} alt='spoon-img' className='spoon-img'></img>
    </div>
  )
}

export default Subheading