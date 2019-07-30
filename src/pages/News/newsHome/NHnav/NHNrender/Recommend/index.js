import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import Banner from '../../../../../Home/banner'
import './nhr.css'
import NHCommen from '../Common'

class NHRecommend extends Component{
    constructor(){
        super();
        this.state = {
            nhrlist:[
                {
                    imgUrl:require('./RecommendImg/NHR1.jpg'),
                    title:'4万元卡地亚带表带一年就断?究竟是什么原因？',
                    type:'大讲堂',
                    classRoom:'第13课堂',
                    path:'/news/home/forum',
                },
                {
                    imgUrl:require('./RecommendImg/NHR1.jpg'),
                    title:'为什么会有人在闲鱼上卖160...',
                    type:'表友论',
                    classRoom:'第10课堂',
                    path:'/news/home/chat',
                },
            ],
            pathname:''
        }
    }
    componentWillMount(){
        this.setState({
            pathname:this.props.location.pathname.split('/')[3]
        })
    }

    render(){
        let {nhrlist} = this.state
        return <div>
            <Banner/>
            <div className='nhr-imgbox'>
                {
                    nhrlist.map(item=><div className='nhr-img-list' key={item.type}>
                        <img src={item.imgUrl} alt='' className='nhr-img'/>
                        <p className='nhr-title'>{item.title}</p>
                        <div className='nhr-type' onClick={()=>{this.props.history.push(item.path)}}>{item.type}</div>
                        <div className='nhr-classroom'>{item.classRoom}</div>
                    </div>)
                }
            </div>
            <NHCommen data={this.props.data}/>
        </div>
    }
}

NHRecommend = withRouter(NHRecommend)

export default NHRecommend