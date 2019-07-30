import React,{Component} from 'react'

import './itemize.css'

class Itemize extends Component{
    constructor(){
        super();
        this.state ={
            list:[
                {
                    title:'男表',
                    imgUrl:'',
                },
                {
                    title:'女表',
                    imgUrl:'',
                },
                {
                    title:'名匠维修',
                    imgUrl:'',
                },
                {
                    title:'二手拍卖',
                    imgUrl:'',
                },
            ]
        }
    }

    componentWillMount(){
        let arr = ['/itemize.png','/itemize1.png','/itemize2.png','/itemize3.png']
        this.state.list.map((item,i)=>{
             return item.imgUrl = require('../../../assets/img' + arr[i])
        })
    }

    render(){
        let {list} = this.state
        return <div className='itemize-listbox'>
            {
                list.map(item=><div key={item.title} className='itemize-list'>
                    <img className='itemize-listimg' src={item.imgUrl} alt={item.title}/>
                    <p className='itemize-listtitle'>{item.title}</p>
                </div>)
            }
        </div>
    }
}

export default Itemize