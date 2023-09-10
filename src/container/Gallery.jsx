import React from 'react'
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from '../Constants';
import { Subheading } from '../components';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="gallery flex-center">
      <div className="gallery-content">
        <Subheading title="Instagram" />
        <h1 className="header-h1">Photo Gallery</h1>
        <p className="p-opensans" style={{ color: '#AAAAAA', marginTop: '2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom-button">View More</button>
      </div>

      <div className="gallery-images">
        <div className="gallery-images-container" ref={scrollRef}>
          {
            [images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
              <div className="gallery-images-card flex-center" key={`gallery_image-${index + 1}`}>
                <img src={image} alt="gallery_image" />
                <a href='https://www.instagram.com/invites/contact/?i=1win0weh73p7k&utm_content=8bs2ob0' className='gallery-image-icon' target='_blank'><BsInstagram className="gallery-image-icon" /></a>
              </div>
            ))
          }
        </div>

        <div className="gallery-images-arrows">
          <BsArrowLeftShort className="gallery-arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery-arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  )
}

export default Gallery