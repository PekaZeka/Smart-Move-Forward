import { useInView } from 'react-intersection-observer';
import { Popup, Logo } from '../../components'
import './getInTouch.css'
import {useState} from 'react'


const GetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='smf__GetInTouch-Background'>
      <div ref={ref} id='Contact' className={inView ? 'smf__GetInTouch fade-in':'smf__GetInTouch fade-out-fast'} >
        <p className='smf__GetInTouch-logoParagraph_top fade-in'>EXCELENCE IN MACHINE MANUFACTURING</p>
        <div className='smf__GetInTouch-logo'>
          <Logo isClickable={true}/>
        </div>
        <p className='smf__GetInTouch-logoParagraph_bot fade-in'>ELEVATE YOUR BUSINESS</p>
        <div className='fade-in'>

          <button className='smf-button scale-up-center' 
                  onClick={() => setIsOpen(true)}>Contact</button>

          <Popup open={isOpen} onClose={() => setIsOpen(false)}/> 
      
        </div>
      </div>
    </div>
  )
}

export default GetInTouch