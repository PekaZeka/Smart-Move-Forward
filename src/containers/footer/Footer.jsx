import { useInView } from 'react-intersection-observer';
import { Time } from "../../components"
import './footer.css'

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  
  return (
    <footer ref={ref} className={inView?'smf__Footer gradient__bg slide-in-left':'smf__Footer gradient__bg'} >
      <h4> © <Time /> Smart Move Forward d.o.o.<br/>All Rights Reserved</h4>
    </footer>
  )
}

export default Footer