import React from 'react'
import '../../styles/Description.css'
import image from './description.JPG'

const DescriptionCard = () => (
  <div id="section1" className="padred" style={{ position: 'relative' }}>
    <div className="card">
      <div className="info">WHO AM I</div>
      <div className="description">
        <img src={image} alt="description" className="image" />
      </div>
    </div>
  </div>
)

export default DescriptionCard
