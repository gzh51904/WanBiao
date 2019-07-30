import React from "react";

import TitelHead from '../titleHead'
import Banner from '../banner'
import AssistantList from '../assistant/assistantlist'

function Women(){
    return <div>
        <TitelHead data='女士'/>
        <Banner data='women'/>
        <AssistantList data='women'/>
    </div>
}

export default Women