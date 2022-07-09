import { useInView } from 'react-intersection-observer';
import { Popup, Logo } from '../../components'
import './getInTouch.css'


const GetInTouch = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  return (
    <div className='smf__GetInTouch-Background'>
      <div ref={ref} id='Contact' className={inView ? 'smf__GetInTouch fade-in':'smf__GetInTouch'} >
        <p className='smf__GetInTouch-logoParagraph_top fade-in'>EXCELENCE IN MACHINE MANUFACTURING</p>
        <div className='smf__GetInTouch-logo'>
          <Logo />
        </div>
        <p className='smf__GetInTouch-logoParagraph_bot fade-in'>ELEVATE YOUR BUSINESS</p>
        <div className='fade-in'>
          <Popup />
        </div>
      </div>
    </div>
  )
}

export default GetInTouch