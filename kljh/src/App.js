import React,{ Component } from 'react';
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';

import Home from './components/Home/Home';
import Classify from './components/Classify/Classify';
import Cars from './components/Cars/Cars';
import Orderform from './components/Orderform/Orderform';
import Mine from './components/Mine/Mine';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import './css/home.css';
//import './sass/app.scss';

class App extends Component{
	constructor(){
		super();
		this.state = {
            menu:[
                {
                    text:'首页',
                    path:'/home',
                    name:'Home',
                    icon:'home'
                },{
                    text:'分类',
                    path:'/classify',
                    name:'Classify',
                    icon:'appstore'
                },{
                    text:'购物车',
                    path:'/cars',
                    name:'Cars',
                    icon:'shopping-cart'
                }, {
                    text:'订单',
                    path:'/orderform',
                    name:'Orderform',
                    icon:'file-text'
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'user'
                }
            ],
					 current:'home'
		}
		  // this绑定
        this.handleChange = this.handleChange.bind(this);
	}
	
	
	 handleChange({ item, key, keyPath }){
        //两个问题：1、如何获取路由路径，2、如何获取history对象
        this.setState({
            current:key
        });

           console.log(key);
        this.props.history.push(key)
    }
	
	 render(){
        return (
        		<div>
            <div className="footer">
                <Menu
                mode="horizontal"
                selectedKeys={[this.state.current]}
                onClick={this.handleChange}
                >
                    {
                        this.state.menu.map(menu=>{
                            return (
                                <Menu.Item key={menu.path}>
                                <Icon type={menu.icon} className="pic"/>
                                <div className="navigation">{menu.text}</div>
                               </Menu.Item>
                            )
                        })
                    }
                </Menu>
               </div>
              <Switch>
              	<Route path="/classify" component={Classify}/>
                <Route exact path="/home" component={Home}/>
                <Route path="/cars" component={Cars}/>
                <Route path="/orderform" component={Orderform}/>
                <Route path="/mine" component={Mine}/>
                <Redirect from="/" to="/home"/>
                </Switch>
          </div> 
        )
    }
}


// 利用withRouter高阶组件包装App组件
App = withRouter(App);
export default App;
