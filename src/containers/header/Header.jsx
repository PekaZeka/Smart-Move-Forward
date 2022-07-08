import { useInView } from 'react-intersection-observer';
import { Slider, Button, Navbar, Logo } from '../../components'
import './header.css'

const Header = () => {
  const [ ref, inView] = useInView({
    threshold: 1,
  });
  return (
    <header className='smf__header' id='Home'>
      <Slider />
      <Navbar />
      <div ref={ref} className={ inView? 'smf__header-title fade-in':'smf__header-title'}>
        <div className='smf__header-logo'>
          <Logo/>
        </div>
        <Button/>
        <h1>SMART MOVE FORWARD</h1>
      </div>
    </header>
  )
}

export default Header