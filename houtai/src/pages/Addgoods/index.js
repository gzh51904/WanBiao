import React,{Component} from 'react';

import {
   
    Input,
    
  } from 'antd';

 class Addgoods extends Component{
    constructor() {
        super();

        this.state = {
            info: {},
            recommed: []
        }
    }
     render(){
         return(
            <div>
                商品名称<input/><br/>
                商品数量<input/><br/>
                商品价格<input/><br/>
                商品图片<input/>
            </div>
         )
        
     }
 }

export default Addgoods;