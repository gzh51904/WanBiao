import React from 'react'

import {withRouter} from 'react-router-dom'

import './commen.css'

let NHCommen = (props)=>{
    let commenList = props.data
    return <div className='nhc-box'>
        {
            commenList.map((item,i)=><div className='nhc-list' key={i}>
                <h2 className='nhc-list-title'>{item.title}</h2>
                <img src={item.imgUrl} alt='' className='nhc-list-img'/>
                <div className='nhc-list-footbox'>
                    <span className='nhc-list-type nhc-list-foot'>{item.type}</span>
                    <span className='nhc-list-date nhc-list-foot'>{item.date}</span>
                </div>
            </div>)
        }
    </div>
}

NHCommen = withRouter(NHCommen)

export default NHCommen