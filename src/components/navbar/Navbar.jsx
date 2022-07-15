import { useInView } from 'react-intersection-observer';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import lngIcon from '../../assets/language.png'
import './navbar.css'
import {useState} from 'react'

const Navbar = () => {
  const [ ref, inView] = useInView({
    threshold: 0.3,
  });
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div ref={ref} className={inView?'smf__Navbar fade-in-fast':'smf__Navbar'}>
        
      <div className='smf__Navbar-containers'>
        <p className='scale-up-center'><a href="#WhatWeDo">Services</a></p>
        <p className='scale-up-center'><a href="#Projects">Projects</a></p>
        <p className='scale-up-center'><a href="#Contact">Contact</a></p>
        <div className='smf__Navbar-language'>
          <a href='#Home' >
            <img src={lngIcon} alt="lngIcon" />
            <p className='scale-up-center'>EN</p>
          </a>
        </div>
      </div>
      <div className='smf__Navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenuLine color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className='smf__Navbar-menu-container scale-up-center'>
          <div className='smf__Navbar-menu_container-links'>
            <p className='scale-up-center'><a href="#WhatWeDo">Services</a></p>
            <p className='scale-up-center'><a href="#Projects">Projects</a></p>
            <p className='scale-up-center'><a href="#Contact">Contact</a></p>
            <div className='smf__Navbar-language'>
              <a href='#Home' >
                <p className='scale-up-center'>Language</p>
              </a>
            </div>

          </div>
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar