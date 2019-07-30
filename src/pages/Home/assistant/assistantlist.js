import React, { Component } from 'react'

import {withRouter} from 'react-router-dom'

class AssistantList extends Component{
    constructor(){
        super();
        this.state = {
            assistantlist:[]
        }
        this.goto = this.goto.bind(this)
    }

    componentDidMount(){
        let {data} = this.props
        let currentthis = this
        // 此处应当封装一个修改state的函数，根据传入的data发送请求设置assistentlist
        let changeassistantlist = function(data){
            // 根据data发送请求

            currentthis.setState({
                assistantlist:[
                    {
                        imgUrl:require('../../../assets/img/assistant.jpg'),
                        name:'lls1',
                        path:'/detail/1',
                    },
                    {
                        imgUrl:require('../../../assets/img/assistant1.jpg'),
                        name:'lls2',
                        path:'/detail/1',
                    },
                    {
                        imgUrl:require('../../../assets/img/assistant2.jpg'),
                        name:'lls3',
                        path:'/detail/1',
                    },
                    {
                        imgUrl:require('../../../assets/img/assistant3.jpg'),
                        name:'lls4',
                        path:'/detail/1',
                    },
                ]
            })
        }
        changeassistantlist(data);
        changeassistantlist = null;
    }
    goto(val){
        this.props.history.push(val)
    }

    render(){
        let {assistantlist} = this.state
        return <div style={{overflowX:'auto',display:'flex'}}>
            {
                assistantlist.map(item=><img src={item.imgUrl} alt={item.name} key={item.name} style={{width:'40%'}} onClick={this.goto.bind(this,item.path)}/>)
            }
    </div>
    }
}

AssistantList = withRouter(AssistantList)

export default AssistantList