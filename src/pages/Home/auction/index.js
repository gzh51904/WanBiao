import React from "react";

import TitelHead from '../titleHead'
import AuctionList from './auctionlist'

import './auction.css'

function Acution(){
    return <div>
        <TitelHead data='限时竞拍'/>
        <img src={require('../../../assets/img/auction.jpg')} alt='' className='acution-img'/>
        <AuctionList/>
    </div>
}

export default Acution