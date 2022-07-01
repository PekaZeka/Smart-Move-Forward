import React, { useState } from 'react';
import gitHub from "../../assets/gitHub.png";
import './footer.css'



const Footer = () => {
  const [isShown, setIsShown] = useState(true);
  return (
    <div className='drlj__Footer gradient__bg'>
      <p>© 2022 Smart Move Forward d.o.o. All Rights Reserved.</p>
      <div className='drlj__Footer-container'
        onMouseEnter={() => setIsShown(false)}
        onMouseLeave={() => setIsShown(true)}>
        <div className='drlj__Footer-contributors'>
        {isShown && (
          <h3 >Contributors</h3>
        )}
        </div>
        <div className='drlj__Footer-fcknlegends'>
          <div className='drlj__Footer-dalibro'>
            <a href='https://github.com/dalibro-hub'><img src={gitHub} alt='dalibro-hub img'></img></a>
            <p>dalibro-hub</p>
          </div>
          <div className='drlj__Footer-pekazeka'>
            <a href='https://github.com/PekaZeka'><img src={gitHub} alt='PekaZeka img'></img></a>
            <p>PekaZeka</p>        
          </div>
        
        </div> 
      </div>
    </div>
  )
}

export default Footer