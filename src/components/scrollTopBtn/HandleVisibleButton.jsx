import React, { useState } from 'react'

const HandleVisibleButton = () => {
    const [scrollPosition, setSrollPosition] = useState(0);
    const [showGoTop, setShowGoTop] = useState('');
    const position = window.pageYOffset;
    setSrollPosition(position);

    console.log(showGoTop);
    if (scrollPosition > 50) {
      
      return setShowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setShowGoTop("goTopHidden");   
    }
  };

export default HandleVisibleButton