import { Slider, Button, Navbar } from '../../components'
import './header.css'

const Header = () => {
  return (
    <header className='smf__header' id='Home'>
      <Slider />
      <div className='fade-in'>
        <Navbar />
      </div>
      <div className='smf__header-title fade-in'>
        <h1>SMART MOVE FORWARD</h1>
        <Button/>
      </div>
    </header>
  )
}

export default Header