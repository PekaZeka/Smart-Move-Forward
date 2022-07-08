import { useInView } from 'react-intersection-observer';
import lngIcon from '../../assets/internet.png'
import './navbar.css'

const Navbar = () => {
  const [ ref, inView] = useInView({
    threshold: 0.55,
  });
  return (
    <div ref={ref} className={inView?'smf__Navbar fade-in':'smf__Navbar'}>
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
    </div>
  )
}

export default Navbar