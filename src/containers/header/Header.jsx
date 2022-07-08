import { useInView } from 'react-intersection-observer';
import { Slider, Button, Logo } from '../../components'
import './header.css'

const Header = () => {
  const [ ref, inView] = useInView({
    threshold: 0.7,
  });
  return (
    <header className='smf__header' id='Home'>
      <Slider />
      <div className={ inView? 'smf__header-title fade-in':'smf__header-title'}>
        <div  className='smf__header-logo'>
          <Logo/>
        </div >
        <Button />
        <h1 ref={ref}>SMART MOVE FORWARD</h1>
      </div>
    </header>
  )
}

export default Header