import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

import './footer.css'

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            footerlist:[]
        }
        this.goto = this.goto.bind(this)
    }

    componentWillMount(){
        this.setState({
            footerlist:[
                {
                    imgUrl:require('../../../assets/img/footer.jpg'),
                    perMonth:306.7,
                    totelPrice:3680,
                    describe:'天梭 自动机械男表 力洛克系列',
                    characteristic:'80小时自动储',
                    goods_id:'007',
                    path:'/detail/1',
                },
                {
                    imgUrl:require('../../../assets/img/footer1.jpg'),
                    perMonth:227.5,
                    totelPrice:2730,
                    describe:'迪沃斯 石英男表 Executive行政系列',
                    characteristic:'',
                    goods_id:'124',
                    path:'/detail/1',
                },
                {
                    imgUrl:require('../../../assets/img/footer2.jpg'),
                    perMonth:480.8,
                    totelPrice:5770,
                    describe:'爱宝时 机械男表 Emotion情感系列',
                    characteristic:'水蓝版',
                    goods_id:'581',
                    path:'/detail/1',
                },
                {
                    imgUrl:require('../../../assets/img/footer3.jpg'),
                    perMonth:1900,
                    totelPrice:22800,
                    describe:'欧米茄 机械男表 碟飞系列',
                    characteristic:'',
                    goods_id:'727',
                    path:'/detail/1',
                },
            ]
        })
    }

    goto(val){
        
        this.props.history.push(val)
    }

    render(){
        let {footerlist} = this.state
        return <ul className='footer-listbox'>
            {
                footerlist.map(item=><li key={item.goods_id} className='footer-list' onClick={this.goto.bind(this,item.path)}>
                    <div className='footer-imgbox'>
                        <img src={item.imgUrl} alt={item.describe} className='footer-listimg'/>
                    </div>
                    <div className='footer-price'>
                        <span className='footer-price-premonth'>月付</span>
                        <span className='footer-newprice'>￥{item.perMonth}</span>
                        <span className='footer-oldprice'>
                            <span className='footer-price-shu'></span>
                            ￥{item.totelPrice}
                            </span>
                    </div>
                    <div className='footer-describe'>{item.describe}</div>
                    {
                        item.characteristic?(<div className='footer-special'><div className='footer-special-content'>{item.characteristic}</div></div>):(<div className='footer-special'></div>)
                    }
                </li>)
            }
        </ul>
    }
}

Footer = withRouter(Footer)

export default Footer