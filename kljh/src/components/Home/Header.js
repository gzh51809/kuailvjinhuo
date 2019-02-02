import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../sass/home/header.scss'
class Header extends React.Component{
	constructor(){
		super();
		this.state = {
          
		}
	}
	
	 render(){
        return (
            <div className="header">
            	<div className="header1">
	            		<div className="city">
	            		<div className="location">
	            		<img src={require("../../img/homeimg/dizhi.png")} alt="地址" />
	            		</div>
	            		<div className="city-full-name">
	            		<span className="city-name">佛山市</span>
            			</div>
            		</div>
            		<div className="service"><img src={require("../../img/homeimg/fuwuerji.png")} alt="服务"/></div>
            		<div className="header-search">
            		<div className="searchBar-part">
            			<NavLink to="search">
            			<div className="search">
            			<img src={require("../../img/homeimg/search.png")} alt="服务" />
            			<span>搜索想要的商品</span>
            			</div>
            			</NavLink>
            			</div>
            		</div>
            		
            	</div>
            </div>
        )
    }
}

export default Header;