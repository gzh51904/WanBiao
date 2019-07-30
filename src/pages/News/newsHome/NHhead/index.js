import React from 'react'
import {withRouter} from 'react-router-dom'

import {Icon} from 'antd'
import './nhhead.css'

let NHhead = (props)=><div className='nhheadbox'>
    <div className='nhhead-back' onClick={()=>{props.history.push('/home')}}>
        <Icon type='left' className='nhhead-back-icon'/>
        <span className='nhhead-back-title'>万表</span>
    </div>
    <h2 className='nhhead-title'>万表世界</h2>
</div>

NHhead = withRouter(NHhead)

export default NHhead