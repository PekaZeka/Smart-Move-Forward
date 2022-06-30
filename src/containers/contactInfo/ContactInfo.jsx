import React from 'react'
import { Map } from '../../components'
import {  location, phone, mail } from './imports'
import './contactInfo.css'

const ContactInfo = () => {
  return (
    <div className="drlj__ContactInfo">
      <div className="drlj__ContactInfo-content">
        <h3>Contact Info</h3>
        <div className='drlj__ContactInfo-content_location'>
          <img src={location} alt="location" />
          <p>
            Smart Move Forward 
            <br></br>
            Doža Đerđa 128
            <br></br>
            21232 Temerin  
            <br></br>
            Serbia 
          </p>
        </div>
        <div className='drlj__ContactInfo-content_phone'>
          <img src={phone} alt="phone" />
          <div>
          <a href="tel:+381 21 840 247">+381 21 840 247</a>
          </div>
        </div>
        <div className='drlj__ContactInfo-content_mail'>
          <img src={mail} alt="mail" />
          <div>
          <a href="mailto:SMF@info.rs">SMF@info.rs</a>
          </div>
        </div>  
      </div>
      <Map />
    </div>
  )
}

export default ContactInfo