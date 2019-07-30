import React from 'react'

let CsList = ({item,i,arr})=><li key={i} className='cs-reply-listbox'>
        <div className='cs-reply-avatarbox'>
            <div className={'cs-reply-avatar cs-reply-avatar'+item.title}>
                <img src={i===0?item.imgUrl:(arr[i].name===arr[i-1].name?'':item.imgUrl)} alt='' className='cs-reply-img'/>
            </div>
        </div>
        <div className='cs-reply-before'>
            <div className={'cs-reply-list cs-reply-list' + item.title}>
                <div className='cs-reply-time'>{item.sendTime}</div>
                <p className='cs-reply-content'>{item.conetent}</p>
                <a href={item.goods_url}>{item.goods_url}</a>
            </div>
        </div>
    </li>

export default CsList