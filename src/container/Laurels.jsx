import React from 'react'
import { data, images } from '../Constants'
import { Subheading } from '../components'

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
  <div className="laurels-awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="laurels-awards-card-content">
      <p className="p-cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p-opensans">{subtitle}</p>
    </div>
  </div>)
};

const Laurels = () => {
  return (
    <div className="app-bg section-main section-padding" id="awards">
      <div className="section-info">
        <Subheading title="Awards & recognition" />
        <h1 className="header-h1">Our Laurels</h1>

        <div className="laurels-awards">
          {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
        </div>
      </div>

      <div className="section-img">
        <img src={images.laurels} alt="laurels_img" />
      </div>
    </div>
  )
}

export default Laurels