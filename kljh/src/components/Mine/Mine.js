import React,{ Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../../sass/mine/mine.scss'

class Mine extends Component{
	
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return(
			<div className="page-group">
				<div className="profile-page">
					<div className="content">
					<NavLink to="login">
						<div className="section-login">
							<div className="baseinfo-panel">
							<div className="avatar"><img alt="" src={require('../../img/mineimg/touxiang.png')}/></div>
							<div className="base-info">
							<div className="nologin-title">点击登录</div>
							<div className="base-info-bottom"><div className="ps-info">登录后体验更多功能</div></div>
							</div>
							
							</div>
						</div>
					</NavLink>
					<div className="item-panel">
						<div className="cell-item">
							<span className="picc"><img alt="" src={require('../../img/mineimg/fuwuerji.png')} /></span>
							<div className="cell-content">客服中心</div>	
							<NavLink to="reg"><span className="cell-link">没有帐号？点此注册</span></NavLink>
						</div>
						<div className="cell-item">
							<span className="picc"><img alt="" src={require('../../img/mineimg/guanyuwe.png')} /></span>
							<div className="cell-content">关于我们</div>
						</div>
					</div>
					
					</div>
				</div>
			</div>
		)
	}
}

export default Mine;