import React,{ Component } from "react";

import CsList from './cslist'
import {Icon} from 'antd'

import  {withRouter} from 'react-router-dom'

import './cs.css'

let timer = [];

class CustomerService extends Component{
    constructor(){
        super();
        this.state = {
            items:[
                {
                    imgUrl:require('../../../assets/img/answer.jpg'),
                    conetent:'买表不知道选什么款式？腕表年中热销榜，大家都在买的表，准没错！3.5折起，12期免息分期，咨询客服再送好礼！点击进入',
                    goods_url:'http://www.4399.com/',
                    sendTime:('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + ':' + ('00' + new Date().getSeconds()).slice(-2),
                    name:'tangtang',
                    title:'left',
                },
                {
                    imgUrl:require('../../../assets/img/answer.jpg'),
                    conetent:'您好！欢迎您的到来，下单前咨询唐唐有优惠的 请问您有看中的款式吗 0.0 可添加微信10086了解更多款式和优惠哦！',
                    goods_url:'',
                    sendTime:"",
                    name:'tangtang',
                    title:'left',
                },
            ],
            response:[
                "请不要说你字",
                '您好',
                '您去年买表了吗？',
                '...',
                'qqwrwwv 溜了溜了',
            ]
        }
        this.sendmsg = this.sendmsg.bind(this)
    }

    componentWillMount(){
        window.scrollTo(0,0)
    }

    sendmsg(val){       
        let keyCode = val.keyCode || '';
        if(keyCode !== 13 && val!=='btn')return
        let e = this.refs.csInput.value;
        if(!e) return
        this.refs.csInput.value =''
        this.refs.csInput.focus()
        let imgUrl = '';
        if(this.state.items[this.state.items.length - 1].name === 'tangtang'){
            imgUrl = require('../../../assets/img/answer.jpg');
        }
        this.setState({
            items:[...this.state.items,
                {
                    imgUrl,
                    conetent:e,
                    goods_url:'',
                    sendTime:('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + ':' + ('00' + new Date().getSeconds()).slice(-2),
                    name:'yourself',
                    title:'right',
                }
            ]
        },()=>{
            if(/你/.test(e)){
                let histime = setTimeout(()=>{this.setState({
                        items:[
                            ...this.state.items,
                            {
                                imgUrl:require('../../../assets/img/answer.jpg'),
                                conetent:this.state.response[0],
                                goods_url:'',
                                sendTime:('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + ':' + ('00' + new Date().getSeconds()).slice(-2),
                                name:'tangtang',
                                title:'left',
                            }
                        ]
                    })
                    let scrollAddress2 = this.refs.csMain.offsetHeight - window.innerHeight + 300
                    if(scrollAddress2>=0){
                        window.scrollTo(0,scrollAddress2)
                    }
                    timer.push(histime)
                },500)
                return
            }
        })
        let mytime = setTimeout(() => {
            let scrollAddress = this.refs.csMain.offsetHeight - window.innerHeight + 300
            if(scrollAddress>=0){
                window.scrollTo(0,scrollAddress)
            }
            timer.push(mytime)
        });
        let randomNum = parseInt(Math.random()*10)
        if(randomNum){
            let randomTime = parseInt(Math.random()*2000 + 1000);
            let timethis = this;
            let time = setTimeout(()=>{setTimeout(()=>{
                let randomsendNum = parseInt(Math.random()*4 + 1);
                let conetent = timethis.state.response[randomsendNum];
                timethis.setState({
                    items:[
                        ...timethis.state.items,
                        {
                            imgUrl:require('../../../assets/img/answer.jpg'),
                            conetent,
                            goods_url:'',
                            sendTime:('00' + new Date().getHours()).slice(-2) + ':' + ('00' + new Date().getMinutes()).slice(-2) + ':' + ('00' + new Date().getSeconds()).slice(-2),
                            name:'tangtang',
                            title:'left',
                        }
                    ]
                })
                let scrollAddress2 = this.refs.csMain.offsetHeight - window.innerHeight + 300
                if(scrollAddress2>=0){
                    window.scrollTo(0,scrollAddress2)
                }
            },randomTime)})
            timer.push(time)
        }
    }    

    componentWillUnmount(){
        for(let i = 0,len = timer.length;i < len;i++){
            clearTimeout(timer[i]);
        }
    }

    render(){
        let {items} = this.state
        return <div className='cs'>
            <div className='cs-head'>
                <Icon type='arrow-left' className='cs-head-icon' onClick={()=>{this.props.history.push('/home')}}/>
                <h3 className='cs-tangtang'>222号客服_唐唐</h3>
                <Icon type='close-circle' className='cs-head-icon cs-head-iconhide'/>
            </div>
            <ul className='cs-main' ref='csMain'>       
                {
                items.map((item,i,arr)=><CsList item={item} i={i} arr={arr} key={i}/>)         
                }
            </ul>
            <div className='cs-footer'>
                <input ref='csInput' className='cs-footer-input' placeholder='我想问...' onKeyUp={this.sendmsg.bind(this)}/>
                <Icon type='smile' className='cs-footer-icon'/>
                <button className='cs-footer-btn'  onClick={this.sendmsg.bind(this,'btn')}>发送</button>
            </div>
        </div>
    }
}

CustomerService = withRouter(CustomerService)

export default CustomerService