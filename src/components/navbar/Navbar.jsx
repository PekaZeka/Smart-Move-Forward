import { useInView } from 'react-intersection-observer';
import { Logo } from '../../components'
import lngIcon from '../../assets/internet.png'
import './navbar.css'

const Navbar = () => {
  const [ ref, inView] = useInView({
    threshold: 0.55,
  });
  return (
    <div ref={ref} className={inView?'smf__Navbar fade-in':'smf__Navbar'}>
        <div className='smf__Navbar-Logo'>
          <Logo/>
        </div>
        <div className='smf__Navbar-containers'>
          <p className='scale-up-center'><a href="#Home">Home</a></p>
          <p className='scale-up-center'><a href="#WhatWeDo">Services</a></p>
          <p className='scale-up-center'><a href="#Projects">Projects</a></p>
          <p className='scale-up-center'><a href="#Contact">Contact</a></p>
          <a href='#Home' className='smf__Navbar-language'>
            <img src={lngIcon} alt="lngIcon" />
            <p className='scale-up-center'>Language</p>
          </a>
        </div>
    </div>
  )
}

export default Navbar