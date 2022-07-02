import React from 'react';
import gitHub from "../../assets/gitHub.png";
import './footer.css'



const Footer = () => {
  return (
    <div className='drlj__Footer gradient__bg'>
      <h5>© 2022 Smart Move Forward d.o.o. All Rights Reserved.</h5>
      <div className='drlj__Footer-container'>
        <h3 className='tracking-out-expand'>Contributors</h3>
        <div className='drlj__Footer-fcknlegends'>
          <div className='drlj__Footer-dalibro bounce-in-top'>
            <a href='https://github.com/dalibro-hub'><img src={gitHub} alt='dalibro-hub img'></img></a>
            <p>dalibro-hub</p>
          </div>
          <div className='drlj__Footer-pekazeka bounce-in-top-delay'>
            <a href='https://github.com/PekaZeka'><img src={gitHub} alt='PekaZeka img'></img></a>
            <p>PekaZeka</p>        
          </div>
        </div> 
      </div>
    </div>
  )
}

export default Footer