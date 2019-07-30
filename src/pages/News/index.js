import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import NewsHome from './newsHome'
import NewsDiscover from './newsDiscover'
import NewsSelect from './newsSelect'
import { Icon } from 'antd';
import './news.css'

let obj = {
    home:NewsHome,
    discover:NewsDiscover,
    select:NewsSelect,
}

class News extends Component{
    constructor(){
        super();
        this.state = {
            navfoot:[
                {
                    icon:'home',
                    title:'首页',
                    path:'/news/home',
                    name:'home'
                },
                {
                    icon:'eye',
                    title:'发现',
                    path:'/news/discover',
                    name:'discover'
                },
                {
                    icon:'unordered-list',
                    title:'选表',
                    path:'/news/list',
                    name:'select'
                },
                {
                    icon:'user',
                    title:'我的',
                    path:'/mine',
                    name:'mine'
                },
            ],
            current:'home',
        }
        this.choseNav = this.choseNav.bind(this)
    }

    componentWillMount(){
        let name = this.props.location.pathname.split('/')[2]
        this.setState({
            current:name,
        })
    }

    choseNav(path,name){
        this.setState({
            current:name
        })
        this.props.history.push(path);
    }

    render(){
        let {navfoot,current} = this.state
        let Com = obj[current]
        // console.log(com)
        return <div className='nhn-nbox'>
            {
                <Com/>
            }
            <ul className='nhn-nlistbox'>
                {
                    navfoot.map((item,i)=><li key={i} className={item.name===this.state.current?'nhn-nlist nhn-nlhigh':'nhn-nlist'} onClick={this.choseNav.bind(this,item.path,item.name)}>
                        <Icon type={item.icon} className='nhn-nicon'/>
                        <p className='nhn-ntitle'>{item.title}</p>
                    </li>)
                }
            </ul>
        </div>
    }
}

News = withRouter(News)

export default News