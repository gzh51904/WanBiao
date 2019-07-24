import React, { Component } from 'react';

import { NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './login.css'


class Login extends Component {
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
                                <input   type="tel" placeholder="请输入手机号" className="phone_num" />
                            </p>
                            <p className="phone"><em>密码</em>
                                <input   type="tel" placeholder="请输入密码" className="phone_num" />
                            </p>
                            <p className="note"> <em>验证码</em>
                                <input   type="tel"  className="note_code" />
                                <a href="javascript:void(0);" id="sendCode"  ></a>
                            </p>
                        </div>
                        <a className="login" id="mobile_login">立即登录</a>

                        <a href="javascript:void(0);" className="login isLogin h"> alt=""></a>
                        <p className="user user_login"><i className="icon-a-user"></i>手机验证码登录</p>

                    </div>
                </div>
            </div>
          
		</div>
       
    }
}

export default Login;