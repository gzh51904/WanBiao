import React from 'react'
import {withRouter,Link} from 'react-router-dom'

import { Row, Col , Icon} from 'antd';
import './head.css'

// 引用图片
const img = require('../../../assets/img/1.png')

let Head = (props)=><div className='head-contain'>
    <Row className='headbox'>
        <Col span={4} className='head-logobox'>
            <img src={img} alt='' className='head-logo' onClick={()=>{props.history.push('/home')}}/>
        </Col>
        <Col span={16}>
            <Link to='/search'>
                <div className='head-search'>
                    <Icon type="search" className='head-search-icon'/>
                    <span>购表享12期分期免息优惠</span>
                </div>
            </Link>
        </Col>
        <Col span={2} className='head-imgbox' onClick={()=>{props.history.push('/customerService')}}>
            <img src={require('../../../assets/img/answer.jpg')} alt='' className='head-img'/>
        </Col>
    </Row>
</div>

Head = withRouter(Head)

export default Head