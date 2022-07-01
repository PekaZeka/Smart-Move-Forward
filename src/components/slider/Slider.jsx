import React, {useState,useEffect} from 'react'
import './slider.css'
import dataSlider from './DataSlider'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
    const moveDot = index => {
        setSlideIndex(index)
    }
    useEffect(() => {
        const interval = setInterval(() => {
          nextSlide();
        }, 4000);
        return () => clearInterval(interval);
      });
    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                    <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='img' />
                    </div>
                )
            })}
            <div className="container-dots  fade-in">
                {dataSlider.map((item, index) => (
                    <div key={item.id} onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}>  
                    </div>
                ))}
            </div>
        </div>
    )
}

