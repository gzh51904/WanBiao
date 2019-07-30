import React,{ Component } from "react";

import Head from './head'
import Banner from './banner'
import Itemize from './itemize'
import Brand from './brand'
import Hot from './common/hot'
import Assistant from './assistant'
import Auction from './auction'
import Man from './common/man'
import Women from './common/women'
import Viper from './common/viper'
import Share from './share'
import Footer from './footer'
import Answer from './answer'

class Home extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return <div>
            <Head/>
            <Banner data='banner'/>
            <Itemize/>
            <img src={require('../../assets/img/2.jpg')} alt='' style={{width:'100%',height:'136px'}}/>
            <Brand/>
            <Hot/>
            <Assistant/>
            <Auction/>
            <Man/>
            <Women/>
            <Viper/>
            <Share/>
            <Footer/>
            <Answer/>
        </div>
    }
}

export default Home