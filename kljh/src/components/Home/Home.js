import React from 'react';
//import {Route,Link,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
class Home extends React.Component{
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
                    text:'列表',
                    path:'/list',
                    name:'List',
                    icon:'bars'
                },{
                    text:'我的',
                    path:'/mine',
                    name:'Mine',
                    icon:'user'
                },
            ],
             current:'/home'
		}
	}
	
	 render(){
        return (
            <div>
                <Menu
                mode="horizontal"
                selectedKeys={[this.state.current]}
                >
                    {
                        this.state.menu.map(menu=>{
                            return (
                                <Menu.Item key={menu.path}>
                                    <Icon type={menu.icon}/>{menu.text}
                                </Menu.Item>
                            )
                        })
                    }
                </Menu>
            </div>
        )
    }
}

export default Home;