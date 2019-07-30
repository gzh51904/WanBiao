import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

class ShareList extends Component{
    constructor(){
        super();
        this.state = {
            sharelist:[]
        }
        this.goto = this.goto.bind(this)
    }

    componentWillMount(){
        this.setState({
            sharelist:[
                {
                    name:'品牌商合作',
                    imgUrl:require('../../../assets/img/share1.jpg'),
                    path:'/detail/1',
                },
                {
                    name:'维修点合作',
                    imgUrl:require('../../../assets/img/share.jpg'),
                    path:'/detail/1',
                },
                {
                    name:'二手商家合作',
                    imgUrl:require('../../../assets/img/share2.jpg'),
                    path:'/detail/1',
                },
                {
                    name:'实体店合作',
                    imgUrl:require('../../../assets/img/share3.jpg'),
                    path:'/detail/1',
                },
            ]
        })
    }

    goto(val){
        this.props.history.push(val)
    }

    render(){
        let {sharelist} = this.state
        return <div>
            {
                sharelist.map(item=><img src={item.imgUrl} alt={item.name} key={item.name} onClick={this.goto.bind(this,item.path)} style={{width:'100%'}}/>)
            }
        </div>
    }
}

ShareList = withRouter(ShareList)

export default ShareList