import React from 'react'
import { Button } from '../../components'
import logo from '../../assets/logo.png'
import './getInTouch.css'

const GetInTouch = () => {
  return (
    <div className='drlj__GetInTouch'>
      <p className='drlj__GetInTouch-logoParagraph_top fade-in'>EXCELENCE IN MACHINE MANUFACTURING</p>
      <img className='swirl-in-fwd' src={logo} alt="logo"/>
      <p className='drlj__GetInTouch-logoParagraph_bot fade-in'>ELEVATE YOUR BUSINESS</p>
      <div className='fade-in'>
        <Button />
      </div>
    </div>
  )
}

export default GetInTouch