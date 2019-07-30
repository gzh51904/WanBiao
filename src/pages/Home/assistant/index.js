import React from "react";

import TitelHead from '../titleHead'
import Banner from '../banner'
import AssistantList from './assistantlist'

function Assistant(){
    return <div>
        <TitelHead data='二手表库'/>
        <Banner/>
        <AssistantList/>
    </div>
}

export default Assistant