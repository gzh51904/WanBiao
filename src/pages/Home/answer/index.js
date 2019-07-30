import React from 'react'
import {withRouter} from "react-router-dom"
import {Icon} from 'antd'

import './answer.css'

let  Answer = (props)=><div className='answerbox' onClick={()=>{props.history.push('/customerService')}}>
    <Icon type='message'/>
</div>

Answer = withRouter(Answer)

export default Answer