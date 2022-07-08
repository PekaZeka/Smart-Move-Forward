import {useState,useEffect} from 'react'
import './counter.css'

function Counter({number, text, isCounting}) {
    const [count, setCount] = useState(1);
    const [plus, setPlus] = useState('');
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShow(true)
        }, 600)
    
        return () => clearTimeout(timeout)
    
      }, [show])
    
    useEffect(() => {

      if (show===true && isCounting===true){
          const timer = () => {
              setCount(count + 1);
          }
          if (count >= number) {
              const plus=setPlus('+');
              return plus;
          }
          const interval = setInterval(timer, 800/number);
          return () => clearInterval(interval);
          }
      else{
        setCount(1)
        setPlus('')
        setShow(false)
      }
        },
    [count, number, plus, show,isCounting]);
        
    return (
    <div className='smf__counter'>
        <p>{count}{plus}</p>
        <p>{text}</p>
    </div>
  )
}

export default Counter


