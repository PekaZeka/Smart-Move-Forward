import React from 'react'
import './feature.css'

const Feature = ({iconURL, title, text}) => {
  return (
    <div>
      <div className="drlj__WhatWeDo-container_feature">
        <div className="drlj__WhatWeDo-container_feature-icon">
          <img src={iconURL} alt="features_icon" />
        </div>
        <div className='drlj__WhatWeDo-container_feature-content'>
          <div>
            <h1>{title}</h1>
            <h3>{text}</h3>
          </div>
          <p>Learn more</p>
        </div>
      </div>
    </div>  
  )
}

export default Feature