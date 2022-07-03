import React from 'react';
   
function Time() {
    const currentYear =new Date().getFullYear();
    return (
        <h4>
            {currentYear}
        </h4>        
    );
}

export default Time