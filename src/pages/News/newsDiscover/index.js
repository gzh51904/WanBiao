import React, { Component } from 'react'

import {Icon, Badge} from 'antd'
import './newsdiscover.css'

class NewsDiscover extends Component{
    constructor(){
        super();
        this.state = {
            list:[
                {
                    type:'名人',
                    date:'2018-04-11',
                    content:'潘玮柏又戴了新的理查德米尔，这款新出的RM 53-01 PABLO MAC DONOUGH陀飞轮腕表价值6090000元。不愧是娱乐圈中的“大表哥”。',
                    discribe:'腕表采用碳纤维材质及防弹级别的表镜，独特的悬索式机芯，由两种独立结构组成，一层是地板固定于表壳，还有一层则是“中央”基板，通过钢索固定，这种机芯的好处就是减震，提供最佳的冲击保护。',
                    imgUrl:require('./img/NHD1.jpg'),
                    support:35,
                    id:1,
                },
                {
                    type:'新品',
                    date:'2018-04-11',
                    content:'欧米茄Omega这款超霸的时候已经秒中毒,44.25毫米的黑色氧化锆陶瓷表壳，腕表采用精致的镂空表盘，以呈现出月球表面的感觉。据了解这款月之暗面”阿波罗8号腕表价格在7w人民币左右，好喜欢怎么办？大家快点来救救我！',
                    discribe:'',
                    imgUrl:require('./img/NHD2.jpg'),
                    support:108,
                    id:2,
                },
            ],
            current:false,
        }
        this.support = this.support.bind(this)
    }

    support(val){
        this.state.list.forEach(item=>{
            if(item.id===val){
                item.support = item.support + 1
            }
            return item
        })
        this.setState({
            current:!this.state.current
        })
    }

    render(){
        let {list} = this.state
        return <div className='nhn-box'>
            <div className='nhn-disbox'>发现</div>
            {
                list.map((item,i)=><div key={i} className='nhn-dislist'>
                    <div className='nhn-dislist-head'>
                        <div className='nhn-dislist-type'>{item.type}</div>
                        <div className='nhn-dislist-date'>{item.date}</div>
                    </div>
                    <p className='nhn-dislist-main'>
                        <span className='nhn-dislist-content'>{item.content}</span>
                        <span className='nhn-dislist-discribe'>{item.discribe}</span>
                    </p>
                    <img src={item.imgUrl} alt='' className='nhn-dislist-img'/>
                    <div className='nhn-dislist-foot'>
                        <div className='nhn-dislist-talk' onClick={this.support.bind(this,item.id)}>
                            <Badge count={item.support} overflowCount={99}>
                                <Icon type='like' className='nhn-dislist-icon'/>
                            </Badge>
                            <span className='nhn-dislist-ttitle'>赞</span>
                        </div>
                        <div>
                            <Icon type='form' className='nhn-dislist-icon'/>
                            <span className='nhn-dislist-ttitle'>评论</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}

export default NewsDiscover