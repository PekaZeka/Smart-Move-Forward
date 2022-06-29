import React, {useState,useEffect} from 'react'
import './counter.css'
import '../../index.css'

export default function Counter({number, text}) {
    const [count, setCount] = useState(1);
    const [plus, setPlus] = useState('');
    const [show, setShow] = useState(false)
    
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShow(true)
        }, 500)
    
        return () => clearTimeout(timeout)
    
      }, [show])
    
    useEffect(() => {
    if (show===true){
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
        },
    [count, number, plus, show]);
        
    return (
    <div className='drlj__counter'>
        <p>{count}{plus}</p>
        <p>{text}</p>
    </div>
  )
}


