import React from "react";

import TitelHead from '../titleHead'
import Banner from '../banner'
import AssistantList from '../assistant/assistantlist'

function Man(){
    return <div>
        <TitelHead data='男士'/>
        <Banner data='man'/>
        <AssistantList data='man'/>
    </div>
}

export default Man