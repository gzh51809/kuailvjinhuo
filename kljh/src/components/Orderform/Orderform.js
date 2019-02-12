import React,{ Component } from 'react';
import '../../sass/orderform/orderform.scss'
class Orderform extends Component{
	
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return(
			<div className="orderform">
			<div className="img-content">
			<img alt="" src={require('../../img/homeimg/dingdankong.png')}/>
			<p>暂无待付款订单</p>
			</div>
			
			</div>
		)
	}
}

export default Orderform;