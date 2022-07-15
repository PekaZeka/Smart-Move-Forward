import { useInView } from 'react-intersection-observer';
import { Time } from "../../components"
import './footer.css'

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  
  return (
    <footer className='smf__Footer gradient__bg'>
      <h4 ref={ref} className={inView?'fade-in':'fade-out-fast'}> © <Time /> Smart Move Forward d.o.o.<br/>All Rights Reserved</h4>
    </footer>
  )
}

export default Footer