import React, { useEffect } from 'react'
import './scrollTopBtn.css'
import HandleVisibleButton from './HandleVisibleButton'



const ScrollTopBtn = (props) => {
    
    useEffect(() => {
        window.addEventListener("scroll", HandleVisibleButton);
      });
    return (
        <div className={props.showGoTop} onClick={props.scrollUp}>
            <button className="goTop">
                dsdsd
                <i className="goTop__text fas fa-chevron-up" />
            </button>
        </div>
    
    
    );
}

export default ScrollTopBtn