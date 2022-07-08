import { useInView } from 'react-intersection-observer';
import './feature.css'

const Feature = ({iconURL, title, text}) => {

  const { ref, inView } = useInView({
    threshold: 0.3,
    
  });
  return (
    <div ref={ref} className={inView?'smf__Feature-container slide-in-bottom':'smf__Feature-container'}>
      <div className="smf__Feature">
        <div className='smf__Feature-header'>
          <div className="smf__Feature-icon">
            <img src={iconURL} alt="features_icon" />
          </div>
          <h1>{title}</h1>
        </div>
        <div className='smf__Feature-content'>
          <p>{text}</p>
        </div>
      </div>
    </div>  
  )
}

export default Feature