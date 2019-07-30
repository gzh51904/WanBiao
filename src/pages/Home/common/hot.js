import React, { Component } from "react";

import TitelHead from '../titleHead'

class Hot extends Component{
    constructor(){
        super();
        this.state = {
            hotlist:[]
        }
    }

    componentWillMount(){
        this.setState({
            hotlist:[
                {
                    imgUrl:require('../../../assets/img/auction3.jpg'),
                    name:'OMEGA'
                },
                {
                    imgUrl:require('../../../assets/img/auction2.jpg'),
                    name:'DIWOSI'
                },
                {
                    imgUrl:require('../../../assets/img/auction3.jpg'),
                    name:'HEBOLIN'
                },
            ]
        }) 
    }

    render(){
        let {hotlist} = this.state
        return <div>
            <TitelHead data='本月爆款'/>
            {
                hotlist.map(item=><img src={item.imgUrl} alt={item.name} key={item.name} style={{width:'100%'}}/>)
            }
        </div>
    }
}

export default Hot