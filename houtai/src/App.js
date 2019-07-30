import React,{Component} from 'react';


import { Menu, Icon,PageHeader,Form,  Input, Button } from 'antd';


import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import User_List from './pages/User_List';
import Goodslist from './pages/Goodslist';
import Addgoods from './pages/Addgoods';
import Cart from './pages/Cart';
import Mine from './pages/Mine';
import Goods from './pages/Goods';


const { SubMenu } = Menu;

// let AllRouter =[
//   Home,
//   List,
//   Cart,
//   Mine
// ]

class App extends Component{

      constructor(){
        super();
        this.state = {
          dis:'none',
          login_dis:'block',
          navs:[{
                  name:'Home',
                  title:'用户管理',
                  // path:'/home',
                  icon: 'home',
                  children:[{
                    title:'用户列表',
                    name:'user',
                    icon: 'user',
                    path:'/userlist',
                  },{
                    title:'增加新用户',
                    name:'add_user',
                    icon: 'user',
                    path:'/adduser',
                  }]
          },{
            name:'List',
            title:'商品管理',
            path:'/list',
            icon: 'bars',
            children:[{
              title:'商品列表',
              name:'goodslist',
              icon: 'user',
              path:'/goodslist',
            },{
              title:'增加商品',
              name:'addgoods',
              icon: 'user',
              path:'/addgoods',
            }]
    },{
  name:'Mine',
  title:'订单管理',

  icon: 'user',
  children:[{
    title:'订单列表',
    name:'dingdan_list',
    icon: 'user',
    path:'/mine',
  }]
},],
current:'Home'
        }
        this.handleClick = this.handleClick.bind(this)
        this. oClick = this. oClick.bind(this)
      }



      handleClick(data){
        console.log(data);
    
        this.setState({
          current:data.key
        })
        
        // 路由跳转
        // 获取点击的路由路径
        // let currentRouter = this.state.navs.filter(item=>item.name===data.key)[0];
        
        let currentRouter = data.key
        console.log(currentRouter)
        this.props.history.push(currentRouter)
      }

      componentWillMount(){
        
      }
      disp(){
        console.log(7665)
      }
      oClick(data){
        // console.log(this);
        // let goodslist = '/goodslist'
        
        // this.props.history.push(goodslist,)
        this.setState({login_dis:'none',dis:'block'})
      }
      render() {
        let {navs} = this.state;
        // let user = this.state;
        // console.log(user)
        // console.log(user)
        return (
          <div className="App">
          <Menu
           mode="inline"
          
            style={{ width: 256 , height:970,float:'left', display:this.state.dis }}
          >
   
            <PageHeader title="万表后台管理系统" />
            {
            navs.map(item=>(
              // console.log(item.children),
              <SubMenu
              key={item.name}
              title={
                <span>
                  <Icon type={item.icon} />
                  
                  <span>{item.title} </span>
                </span>
              }
            >

              {
            item.children.map(item=>(
              <Menu.Item onClick={this.handleClick} key={item.path}>
                  <Icon type={item.icon} />
                  {item.title}
              </Menu.Item>
            ))
          }
            </SubMenu>            
            ))
          }
          
          </Menu>
          
          <Switch>
          {/* {
            navs.map(item=><Route key={item.name} path={item.path} component={AllRouter[item.name]}/>)
          } */}
          <Route path="/userlist" component={User_List}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/goodslist" component={Goodslist}/>
          {/* <Route path="/login" disp = {this.disp} component={NormalLoginForm}/> */}
          <Route path="/addgoods" component={Addgoods}/>
          <Route path="/mine" component={Mine}/>
          <Route path="/goods/:id" component={Goods}/>
          <Redirect from="/" to="/home" exact/>
          </Switch>
          <div style={{display:this.state.login_dis}}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            
          </Form.Item>
          <Form.Item>
           
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,

          </Form.Item>
          
          <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.oClick.bind(this)} >
            Log in
          </Button>
          <Route path="/goodslist" component={Goodslist}/>
        </Form>
        </div>
          </div>
        );
      }
    }

App = withRouter(App)

export default App;
