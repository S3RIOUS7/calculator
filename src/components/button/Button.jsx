import React, { useState } from "react";

import "/Projects/reactProjects/calculator/src/components/button/button.scss"






const Button = ({value, onClick, type}) => {
    
    return(
    <div>
        <button value={value} type={type} onClick={onClick} ></button>
    </div>
)
}
    
export default Button;



     