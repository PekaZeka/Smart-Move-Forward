import { Button, Logo } from '../../components'
import './getInTouch.css'

const GetInTouch = () => {
  return (
    <div className='smf__GetInTouch' id='Contact'>
      <p className='smf__GetInTouch-logoParagraph_top fade-in'>EXCELENCE IN MACHINE MANUFACTURING</p>
      <div className='smf__GetInTouch-logo'>
        <Logo />
      </div>
      <p className='smf__GetInTouch-logoParagraph_bot fade-in'>ELEVATE YOUR BUSINESS</p>
      <div className='fade-in'>
        <Button />
      </div>
    </div>
  )
}

export default GetInTouch