import { useInView } from 'react-intersection-observer';
import { Slider, Button, Navbar } from '../../components'
import './header.css'

const Header = () => {
  const [ ref, inView] = useInView({
    threshold: 1,
  });
  return (
    <header className='smf__header' id='Home'>
      <Slider />
      <div>
        <Navbar />
      </div>
      <div ref={ref} className={ inView? 'smf__header-title fade-in':'smf__header-title'}>
        <h1>SMART MOVE FORWARD</h1>
        <Button/>
      </div>
    </header>
  )
}

export default Header