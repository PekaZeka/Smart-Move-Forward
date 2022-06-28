import React from 'react'
import './feature.css'

const Feature = ({iconURL, title, text}) => {
  return (
    <div>
      <div className="drlj__WhatWeDo-container_feature">
        <div className='drlj__WhatWeDo-container_feature-header'>
          <div className="drlj__WhatWeDo-container_feature-icon">
            <img src={iconURL} alt="features_icon" />
          </div>
          <h1>{title}</h1>
        </div>
        <div className='drlj__WhatWeDo-container_feature-content'>
          <h3>{text}</h3>
          <p>Learn more</p>
        </div>
      </div>
    </div>  
  )
}

export default Feature