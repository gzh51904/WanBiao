import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'
import {Icon} from 'antd'

import './auctionlist.css'
import Axios from '../../../../node_modules/axios';

let timer = []

class AuctionList extends Component{
    constructor(){
        super();
        this.state = {
            auctionlist:[]
        }
        this.goto = this.goto.bind(this)
    }

    async componentWillMount(){
        // let arr = await Axios.get('http://localhost:1904/goods')
        // console.log(arr)
        let auctionlist = [
            {
                imgUrl:require('../../../assets/img/auctionlist.jpg'),
                name:'劳力士',
                path:'/detail/1',
                icon:'search',
                timer:true,
                oldPrice:41200,
                newPrice:27100,
            },
            {
                imgUrl:require('../../../assets/img/auctionlist1.jpg'),
                name:'积家',
                path:'/detail/1',
                icon:'search',
                timer:false,
                oldPrice:56500,
                newPrice:32800,
            },
            {
                imgUrl:require('../../../assets/img/auctionlist2.jpg'),
                name:'雅典',
                path:'/detail/1',
                icon:'search',
                timer:true,
                oldPrice:41200,
                newPrice:27100
            }
        ]
        auctionlist.forEach((item,i)=>{       
            if(item.timer){
                let entertime = Date.now()
                let endtime = new Date('2019/08/01').getTime()
                timer[i] = setInterval(()=>{
                    if(entertime >= endtime){
                        clearInterval(timer[i])
                    }else{                      
                        let differ = endtime - entertime
                        item.timer = ('00' + parseInt(differ/1000/60/60/24)).slice(-2) + ':' + ('00' + parseInt(differ/1000/60%60)).slice(-2) + ':' + ('00' + parseInt(differ/1000%60)).slice(-2)
                        entertime += 1000;
                        this.setState({
                            auctionlist
                        })
                    }                 
                },1000)
            }
        })        
    }

    componentWillUnmount(){
        for(let i = 0,len = timer.length;i < len;i++){
            clearInterval(timer[i]);
        }
    }

    goto(val){
        this.props.history.push(val)
    }

    render(){
        let {auctionlist} = this.state
        return <div className='auctionlist-box'>
            {
                auctionlist.map(item=><div key={item.name} className='auctionlist-listbox' onClick={this.goto.bind(this,item.path)}>
                    <img src={item.imgUrl} alt={item.name} className='auctionlist-img'/>
                    <div className='auctionlist-counddown' style={{display:item.timer?'block':'none'}}>
                        <Icon type={item.icon} className='auctionlist-icon'/>
                        <div className='auctionlist-timer'>{item.timer}</div>
                    </div>
                    <div className='acutionlist-pricebox'>
                        <span className='auctionlist-newprice'>￥ {item.newPrice}</span>
                        (
                        <del className='auctionlist-oldprice'>原价{item.oldPrice}</del>
                        )
                    </div>
                    <div className='auctionlist-name'>{item.name}</div>
                </div>)
            }
            <div className='auctionlist-morebox'>
                <div className='auctionlist-moreimg'>
                    <Icon type='ellipsis' className='auctionlist-moreicon'/>
                </div>
                <p className='auctionlist-moretitle'>更多</p>
                <p className='auctionlist-moremore'>more</p>
            </div>
    </div>
    }
}

AuctionList = withRouter(AuctionList)

export default AuctionList