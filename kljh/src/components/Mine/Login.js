import React,{ Component } from 'react';
import '../../sass/mine/login.scss'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class Login extends Component{
	
	render(){
		return(
		<div>
	<Tabs defaultActiveKey="1"
	hideAdd="true"
	>
    <TabPane tab="账号密码登陆" key="1">
    	<div className="content">
    	<div className="container">
    			<form className="login-form">
    			<div className="field">
    			<input className="input_desc" placeholder="账号" />
    			<label className="label__icon-desc">
    			<img alt="" src={require('../../img/mineimg/zhanghao.png')}/>
    			</label>
    			</div>
    			
    			<div className="field">
    			<input className="input_desc" placeholder="密码" />
    			<label className="label__icon-desc">
    			<img alt="" src={require('../../img/mineimg/password.png')}/>
    			</label>
    			</div>
    			<div className="login">登录</div>
    			</form>
    		</div>
    	</div>
    	<div className="footer1">
    		<div className="container">忘记账号/密码</div>
    	</div>
    </TabPane>
    <TabPane tab="手机验证登陆" key="2">
    	<div className="content">
    	<div className="container">
    			<form className="login-form">
    			<div className="field">
    			<input className="input_desc" placeholder="手机号" />
    			<label className="label__icon-desc">
    			<img alt="" src={require('../../img/mineimg/phone.png')}/>
    			</label>
    			</div>
    			
    			<div className="field1">
    			<input placeholder="验证码" className="phone__sms-code"/>
    			<div className="yanzheng">发送验证码</div>
    			</div>
    			
    			<div className="login">登录</div>
    			</form>
    		</div>
    	</div>
    	<div className="footer1">
    		<div className="container">忘记账号/密码</div>
    	</div>
    
    </TabPane>
    </Tabs>
		</div>
		)
	}
	
}

export default Login;