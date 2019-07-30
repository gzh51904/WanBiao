import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import {Icon} from 'antd'
import Answer from '../answer'

import './search.css'

class Search extends Component{
    constructor(){
        super();
        this.state = {
            searchitem:[
                {
                    title:'天梭力洛克',
                    path:'/detail/1',
                    hot:true,
                    name:'tsllk'
                },
                {
                    title:'浪琴',
                    path:'/detail/1',
                    hot:true,
                    name:'lq'
                },
                {
                    title:'欧米茄',
                    path:'/detail/1',
                    hot:true,
                    name:'omg'
                },
                {
                    title:'卡西欧',
                    path:'/detail/1',
                    hot:false,
                    name:'kxo'
                },
                {
                    title:'人气好物榜',
                    path:'/detail/1',
                    hot:false,
                    name:'rqhwb'
                },
                {
                    title:'手表特卖',
                    path:'/detail/1',
                    hot:false,
                    name:'sbtm'
                },
                {
                    title:'东方星',
                    path:'/detail/1',
                    hot:false,
                    name:'dfx'
                },
                {
                    title:'新品',
                    path:'/detail/1',
                    hot:false,
                    name:'xp'
                },
            ]
        }
        this.searchsomething = this.searchsomething.bind(this)
        this.clearInput = this.clearInput.bind(this)
        this.goto = this.goto.bind(this)
    }

    searchsomething(){
        if(this.refs.searchInput.value){
            this.refs.searchIcon.style.display = 'inline-block'
        }else{
            this.refs.searchIcon.style.display = 'inline-block'
        }
    }

    clearInput(){
        this.refs.searchInput.value = ''
        this.refs.searchInput.focus()
        this.refs.searchIcon.style.display = 'none'
    }

    goto({name,hot,path}){
        if(hot){
            this.refs[name].className = 'search-main-listclick search-main-hotitemclick' 
        }else{
            this.refs[name].className = 'search-main-listclick'
        }
        this.refs.searchInput.value = name    
        this.props.history.push(path)
    }
    render(){
        let {searchitem} = this.state
        return <div>
            <div className='search-head'>
                <div className='search-inputbox'>
                    <Icon type='search' className='search-inputbox-icon'/>
                    <input 
                    onInput={this.searchsomething}
                    ref='searchInput' 
                    className='search-inputbox-input' 
                    placeholder='搜索商品' 
                    maxLength='30'/>
                    <div ref='searchIcon' style={{display:'none'}} onClick={this.clearInput}>
                        <Icon type='close-circle' className='search-inputbox-icon'/>
                    </div>
                </div>
                <div className='search-cancel' onClick={()=>{this.props.history.push('home')}}>取消</div>
            </div>
            <div className='search-main'>
                <p className='search-main-title'>热门搜索</p>
                <ul className='search-main-listbox'>
                    {
                        searchitem.map(item=><li key={item.name} ref={item.name} className={item.hot?'search-main-hotitem search-main-list':'search-main-list'} onClick={this.goto.bind(this,item)}>
                            {item.title}
                        </li>)
                    }
                </ul>
            </div>
            <Answer/>
        </div>
    }
}

Search = withRouter(Search)

export default Search