import React, { Component } from 'react';
import axios from 'axios';

import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './Reg.css'
// import {rem} from '../rem.js'

import { Input } from 'antd';
// import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd'


class Reg extends Component {
    constructor() {
        super();
        this.state = {
            username: '', //账号
            pwd: '', // 密码
            pwdConfirm: '', // 确认密码
            type: 'worker', // 用户类型 默认求职者
        }

        this.goto = this.goto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        // rem();
    }

    async goto() {
        console.log(1);
        let goodlist = await axios.post("http://localhost:1904/reg");
        // console.log(goodlist);
    }

    handleChange(e,key) {
        // this.setState({
        // [key]:this.refs.input.value
        // })
        // console.log(key);
        // console.log(this.refs.input.value) 
        
        this.setState({
            'username' : e.target.value
        })
       
    }

    handleChangepwd(e,key) {
        // this.setState({
        // [key]:this.refs.input.value
        // })
        // console.log(key);
        // console.log(this.refs.input.value) 
        
        this.setState({
            'pwd' : e.target.value
        })
       
    }

    componentWillMount() {
        console.log('Home.componentWillMount');
        

    }
    componentDidMount() {
        console.log('Home.componentDidMount');
    }
    componentWillUpdate() {
        console.log('Home.componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('Home.componentDidUpdate');
        console.log(this.state.username,this.state.pwd)
    }
    componentWillUnmount() {
        console.log('Home.componentWillUnmount');
    }



    render() {
        return <div>
            <header className="W_title">
                <ul className="clearfix">
                    <li className="wb_back">
                        <a href="javascript:window.history.back();" className="icon-d-back02"></a>
                    </li>
                    <li className="wb_title_middle wb_title">注册</li>
                </ul>
            </header>
            <div className="W_content">
                {/* <InputItem onChange={value => this.handleChange('username', value)}>lbj-账号</InputItem> */}
                <p className="phone"><input onChange={this.handleChange.bind(this)} placeholder="请填写注册手机号" /></p>
                <Input.Password placeholder="输入密码" onChange={this.handleChangepwd.bind(this)} size="large"/>
                {/* <p className="phone"><input type="number" placeholder="请填写注册手机号" id="phone" /></p>
                <p className="phone none"><input type="number" placeholder="输入密码" id="referrer_phone" /></p> */}
                <p className="word">点击注册意味着您同意
				<a href="/member/protocol">《万表用户协议》</a>
                </p>
                <button className="nextBtn on" id="nextBtn" onClick={this.goto.bind()}>注册</button>
                <p className="kf">遇到问题？你可以
				<a href="javascript:void(0);" className="CUSTOMER-SERVICE">联系客服</a>
                </p>
            </div>
            <div className="mui-popup mui-popup-in" >
                <div className="mui-popup-inner">
                    <div className="mui-popup-title">手机号已被绑定</div>
                    <div className="mui-popup-text">请更换其他手机号或直接登录！</div>
                </div>
                <div className="mui-popup-buttons">
                    <span className="mui-popup-button">取消</span>
                    <span className="mui-popup-button mui-popup-button-bold">登录</span>
                </div>
            </div>
            <div className="mui-popup mui-popup-in" >
                <div className="mui-popup-inner">
                    <div className="mui-popup-title">账号为11位手机号码</div>
                    <div className="mui-popup-text">请重新输入</div>
                </div>
                <div className="mui-popup-buttons">
                    <span className="mui-popup-button" >取消</span>
                    <span className="mui-popup-button mui-popup-button-bold">登录</span>
                </div>
            </div>

            <div className="mui-popup mui-popup-in" >
                <div className="mui-popup-inner">
                    <div className="mui-popup-title">注册成功</div>
                    <div className="mui-popup-text">是否跳转登录页面</div>
                </div>
                <div className="mui-popup-buttons">
                    <span className="mui-popup-button">前往主页</span>
                    <a className="mui-popup-button mui-popup-button-bold" href="#/login">跳转</a>
                </div>
            </div>
        </div>
    }
}

export default Reg;