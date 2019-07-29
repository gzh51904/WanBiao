import React, { Component } from 'react';
// import logo from './logo.svg';
import { Button, Radio, Icon } from 'antd';
import { Switch, Route, Redirect , withRouter } from 'react-router-dom';
import './App.scss';

import Home from './pages/Home/';
import List from './pages/List/';
import Cart from './pages/Cart/';
import Mine from './pages/Mine/';
import Login from './pages/Login/';
import Reg from './pages/Reg/';
import Detail from './pages/Detail/';
import Goods from './pages/Goods/index.jsx';




class App extends Component {
  constructor() {
    super();

    this.state = {
      navs: [{
        name: 'Home',
        path: '/home',
        title: '首页'
      }, {
        name: 'List',
        path: '/list',
        title: '列表'
      }, {
        name: 'Cart',
        path: '/cart',
        title: '购物车'
      }, {
        name: 'Mine',
        path: '/mine',
        title: '我的'
      }, {
        name: 'Login',
        path: '/login',
        title: '登录'
      },
      // {
      //   name: 'Reg',
      //   path: '/reg',
      //   title: '注册'
      // },
      {
        name: 'Detail',
        path: '/detail',
        title: '详情'
      }]
    }

    // 改变this指向
    this.goto = this.goto.bind(this)
  }

  goto(path) {
    console.log(path);
    // 编程式导航
    // 如何获取history
    let {history} = this.props;
    // console.log(this.props);
    history.push(path);
  }

  render() {

    return <div>
    
      <Switch>
        {/* <Route path="/" component={Home} exact/> */}
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/cart" component={Cart} />
        <Route path="/mine" component={Mine} />
        <Route path="/login" component={Login} />
        <Route path="/reg" component={Reg} />
        <Route path="/detail" component={Detail} />

        {/* 动态路由 */}
        {/* <Route path="/goods/:id" component={Goods}/>
                  <Route path="/404" render={()=><div>oh no 404</div>}/>
                  <Redirect from="/" to="/home" exact/>
                  <Redirect from="/*" to="/404"/> */}
      </Switch>
      <div className="foot">
        <Radio.Group size='large' onChange={this.handleSizeChange}>
          {
            this.state.navs.map(item => {
              return <Radio.Button value={item.name} onClick={this.goto.bind(this,item.path)} key={item.name} shape="round" >
                {item.title}
              </Radio.Button>
            })
          }
        </Radio.Group>
      </div>
    </div>
  }
}

App = withRouter(App);

export default App;
