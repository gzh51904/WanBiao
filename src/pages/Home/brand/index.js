import React, { Component } from "react";

import TitleHead from '../titleHead'
import Banner from '../banner'

import './brand.css'

class Brand extends Component{
    constructor(){
        super();
        this.state = {
            brandlist:[]
        }
    }

    componentWillMount(){
        this.setState({
            brandlist:[
                {
                    title:'浪琴',
                    name:'LONGINES',
                },
                {
                    title:'欧米茄',
                    name:'OMEGA',
                },
                {
                    title:'德国莫勒',
                    name:'GLASHUETTE',
                },
                {
                    title:'天梭',
                    name:'TISSOT',
                },
                {
                    title:'劳力士',
                    name:'ROLEX',
                },
                {
                    title:'东方星',
                    name:'QRIENT STAR',
                },
                {
                    title:'迪士尼',
                    name:'DISNEY',
                },
                {
                    title:'赫柏林',
                    name:'HERBELIN',
                },
                {
                    title:'帝舵',
                    name:'TUDOR',
                },
            ]
        })
    }

    render(){
        let {brandlist} = this.state
        return <div>
            <TitleHead data={'品牌'}></TitleHead>
            <Banner data='brand'></Banner>
            <div className='brand-listbox'>
                {
                    brandlist.map(item=><div className='brand-list' key={item.name} onClick={()=>{this.props.history.push('/detail/1')}}>
                        <p className='brand-listtitle'>{item.title}</p>
                        <p className='brand-listname'>{item.name}</p>
                    </div>)
                }
            </div>
        </div>
    }
}

export default Brand