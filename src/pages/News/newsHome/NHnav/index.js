import React,{Component} from 'react'

import {withRouter} from 'react-router-dom'

import './nhnav.css'
import Render from './NHNrender/Recommend'

class NHnav extends Component{
    constructor(){
        super();
        this.state = {
            navs:[
                {
                    title:'推荐',
                    path:'/recommend',
                    name:'recommend',
                },
                {
                    title:'购表指南',
                    path:'/guid',
                    name:'guid',
                },
                {
                    title:'手表评测',
                    path:'/vertu',
                    name:'vertu',
                },
                {
                    title:'品牌动态',
                    path:'/trends',
                    name:'trends',
                },
                {
                    title:'时尚穿搭',
                    path:'/fashion',
                    name:'fashion',
                },
                {
                    title:'对话人物',
                    path:'/person',
                    name:'person',
                },
                {
                    title:'大讲堂',
                    path:'/forum',
                    name:'forum',
                },
                {
                    title:'表友论',
                    path:'/chat',
                    name:'chat',
                },
            ],
            commenList:[],
            commenList1:[
                {
                    title:'优衣库、股神巴菲特、劳力士迪通拿……你被骗了吗？',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC1.jpg'),
                    type:'购表指南',
                    typename:'guid',
                    date:'06-13',
                },
                {
                    title:'金表好还是钢表好？这篇文章可能会颠覆你的看法。',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC2.jpg'),
                    type:'购表指南',
                    typename:'guid',
                    date:'05-28',
                },
                {
                    title:'能看懂这只表的人，在中国已经没有几个了，你是其中之一吗？',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC3.jpg'),
                    type:'手表评测',
                    typename:'vertu',
                    date:'07-16',
                },
                {
                    title:'能看懂这只表的人，在中国已经没有几个了，你是其中之一吗？',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC3.jpg'),
                    type:'手表评测',
                    typename:'vertu',
                    date:'07-16',
                },
                {
                    title:'安倍晋三戴了这块表去见特朗普……',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC4.jpg'),
                    type:'品牌动态',
                    typename:'vertu',
                    date:'07-15',
                },
                {
                    title:'安倍晋三戴了这块表去见特朗普……',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC4.jpg'),
                    type:'时尚穿搭',
                    typename:'fashion',
                    date:'07-15',
                },
                {
                    title:'安倍晋三戴了这块表去见特朗普……',
                    imgUrl:require('./NHNrender/Common/commenImg/NHC4.jpg'),
                    type:'品牌动态',
                    typename:'vertu',
                    date:'07-15',
                },
            ],
            current:'/home/recommend'
        }
        this.choseNav = this.choseNav.bind(this)
    }

    componentWillMount(){
        let {pathname} = this.props.location
        let name = pathname.split('/')[3]
        if(name==='recommend'){
            let commenList = this.state.commenList1.filter(item=>item.typename)
            this.setState({
                commenList,
                current:'/home/' + name,
            })
        }else{
            let commenList = this.state.commenList1.filter(item=>item.typename===name)
            this.setState({
                commenList,
                current:pathname.slice(5),
            })
        }
    }

    choseNav(val){
        if(val==='recommend'){
            let commenList = this.state.commenList1.filter(item=>item.typename)
            this.setState({
                commenList,
                current:'/home/' + val,
            })
        }else{
            let commenList = this.state.commenList1.filter(item=>item.typename===val)
            this.setState({
                commenList,
                current:'/home/' + val,
            })
        }
        
        switch(val){
            case 'forum':
            this.props.history.push('/' + val)
            break;
            case 'chat':
            this.props.history.push('/' + val)
            break;
            default:
            this.props.history.push('/news/home/' + val)
            break;
        }
    }

    render(){
        let {navs,current,commenList} = this.state
        return <div>
            <ul className='nhnav-listbox' ref='nhnListBox'>
                {
                    navs.map((item,i)=>(<li key={i} className='nhnav-list' onClick={this.choseNav.bind(this,item.name)}>
                        <div className={('/home/'+item.name)===current?'nhnav-list-title nhnav-list-current':'nhnav-list-title'}>
                            {item.title}
                        </div>
                    </li>)                     
                    )
                }
            </ul>
            <Render data={commenList}/>
        </div>
    }
}

NHnav = withRouter(NHnav)

export default NHnav