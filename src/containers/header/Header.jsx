import React from 'react'
import { Slider, Button, Logo } from '../../components'
import lngIcon from '../../assets/internet.png'
import './header.css'

const Header = () => {
  return (
    <div className='drlj__header'>
      <Slider />
      <div className='drlj__header-topbar fade-in'>
        <div className='drlj__header-topbar_logo'>
          <Logo />
        </div>
        <div className='drlj__header-topbar_lng'>
          <img src={lngIcon} alt="lng-icon"/>
          <a href='src/App.js'>Language</a>
        </div>
      </div>
      <div className='drlj__header-title fade-in'>
        <h1>SMART MOVE FORWARD</h1>
        <Button/>
      </div>
    </div>
  )
}

export default Header