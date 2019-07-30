import React from "react";

import './titleHead.css'

let TitleHead = (props)=>{
    return <div className='titleHead-box'>
        <p className='titleHead-content'>{props.data}</p>
        <div className='titleHead-line'></div>
    </div>
}

export default TitleHead