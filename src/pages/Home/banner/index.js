import React,{Component} from 'react'

import {Carousel} from 'antd'
import './banner.css'

class Banner extends Component{
    constructor(){
        super();
        this.state = {
            banner:[]
               
        }
    }

    componentWillMount(){
        let data = this.props.data
        let currentthis = this
        // 此处应当封装一个修改state的函数，根据传入的data发送请求设置banner
        function changebanner(data){
            currentthis.setState({
                banner:[
                    {
                        imageUrl:require('../../../assets/img/banner1.jpg'),
                        alt:'',
                    },
                    {
                        imageUrl:require('../../../assets/img/banner2.jpg'),
                        alt:'',
                    },
                    {
                        imageUrl:require('../../../assets/img/banner3.jpg'),
                        alt:'',
                    },
                ]
            })
        }
        changebanner(data)
    }

    render(){
        let {banner} = this.state
        return <div className='banner-box'>
            <Carousel autoplay>
                {
                    banner.map((item,i)=><div key={i}>
                        <img src={item.imageUrl} alt={item.alt} style={{width:'100%'}}/>
                    </div>)
                }
            </Carousel> 
        </div>
    }
}

export default Banner