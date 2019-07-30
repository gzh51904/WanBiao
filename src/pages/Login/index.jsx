import React, { Component } from 'react';

import { NavLink, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import './login.css'


class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '', //账号
            pwd: '', // 密码
         
        }

        this.goto = this.goto.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangepwd = this.handleChangepwd.bind(this);
        // rem();
    }

    async goto() {
        console.log(1);
        let username=this.state.username;
        let pwd=this.state.pwd;
        let goodlist = await axios.put("http://localhost:1904/reg",{
            user:{
                username:username,
                pwd:pwd
            }
        })
        let {data} =goodlist;
        console.log(data.data.length);
        if(data.data.length>=1){
            console.log(this.props);
            let {history} = this.props;
            alert('登陆成功');
            history.push('/Home');
        }else(alert('我觉得不行'))
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

    render() {
        return <div>
            <header className="W_title">
                <ul className="clearfix">
                    <li className="wb_back">
                        <a href="javascript:window.history.back();" className="icon-d-back02"></a>
                    </li>
                    <li className="wb_title_middle wb_title">登录</li>
                    <li className="rewrite_right">
                        <a href="#/Reg" className="">注册</a>
                    </li>
                </ul>
            </header>
            <div className="contents">
                <div className="contents">
                    <div className="user_logins">
                        <div className="box">
                            <p className="phone"><em>手机号</em>
                                <input   type="tel" placeholder="请输入手机号" className="phone_num" onChange={this.handleChange.bind(this)}/>
                            </p>
                            <p className="phone"><em>密码</em>
                                <input   type="tel" placeholder="请输入密码" className="phone_num" onChange={this.handleChangepwd.bind(this)}/>
                            </p>
                            {/* <p className="note"> <em>验证码</em>
                                <input   type="tel"  className="note_code" />
                                <a href="javascript:void(0);" id="sendCode"  ></a>
                            </p> */}
                        </div>
                        <a className="login" id="mobile_login"onClick={this.goto.bind()}>立即登录</a>

                        <a href="javascript:void(0);" className="login isLogin h"> alt=""></a>
                        <p className="user user_login"><i className="icon-a-user"></i>手机验证码登录</p>

                    </div>
                </div>
            </div>
          
		</div>
       
    }
}

export default Login;