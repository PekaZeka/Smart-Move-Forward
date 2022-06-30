import React from 'react'
import './feature.css'

const Feature = ({iconURL, title, text}) => {
  return (
    <div>
      <div className="drlj__Feature">
        <div className='drlj__Feature-header'>
          <div className="drlj__Feature-icon">
            <img src={iconURL} alt="features_icon" />
          </div>
          <h1>{title}</h1>
        </div>
        <div className='drlj__Feature-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>  
  )
}

export default Feature