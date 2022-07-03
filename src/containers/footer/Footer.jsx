import React, { useState } from "react";
import gitHub from "../../assets/gitHub.png";
import { Time } from "../../components";
import './footer.css'

const Footer = () => {
  const [isActive, setActive] = useState("false");
  const changeClass = () => {setActive(!isActive);};
  return (
    <div className='drlj__Footer gradient__bg'>
      <h4> © <Time />&nbsp; Smart Move Forward d.o.o. <br></br>All Rights Reserved</h4>
      <div className='drlj__Footer-container'>
        <h3 className={isActive ? 'drlj__contrib' : 'tracking-out-expand'}
            onClick={changeClass}>Contributors</h3>
        <div className='drlj__Footer-fcknlegends'>
          <div className={isActive ? 'drlj__Footer-dalibro' : 'bounce-in-right drlj__Footer-dalibro'}
               onClick={changeClass}>
            <a href='https://github.com/dalibro-hub'><img src={gitHub} alt='dalibro-hub img'></img></a>
            <p>dalibro-hub</p>
          </div>
          <div className={isActive ? 'drlj__Footer-pekazeka' : 'bounce-in-right-delay drlj__Footer-pekazeka'}
               onClick={changeClass}>
            <a href='https://github.com/PekaZeka'><img src={gitHub} alt='PekaZeka img'></img></a>
            <p>PekaZeka</p>        
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer