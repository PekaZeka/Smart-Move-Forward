import { Map } from '../../components'
import { useInView } from 'react-intersection-observer';
import {  location, phone, mail } from './imports'
import './contactInfo.css'

const ContactInfo = () => {

  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  
  return (
    <div ref={ref} className={inView?"smf__ContactInfo fade-in":"smf__ContactInfo"}>
      <div className="smf__ContactInfo-content">
        <h3>Contact Info</h3>
        <div className='smf__ContactInfo-content_location'>
          <img src={location} alt="location" />
          <p>
            Smart Move Forward 
            <br></br>
            Doža Đerđa 128
            <br></br>
            21235 Temerin  
            <br></br>
            Serbia 
          </p>
        </div>
        <div className='smf__ContactInfo-content_phone'>
          <img src={phone} alt="phone" />
          <div>
          <a href="tel:+381 21 840 247">+381 21 840 247</a>
          </div>
        </div>
        <div className='smf__ContactInfo-content_mail'>
          <img src={mail} alt="mail" />
          <div>
          <a href="mailto:smf@info.rs">smf@info.rs</a>
          </div>
        </div>  
      </div>
      <Map />
    </div>
  )
}

export default ContactInfo