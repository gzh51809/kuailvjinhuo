import React,{ Component } from 'react';
import { Carousel } from 'antd';
import '../../sass/list/list.scss';

class List extends Component{
	
	constructor(){
		super();
		this.state={
			
		}
	}
	
	render(){
		return(
			<div className="page-group">
				<div className="csu-detailnew-body">
					<header>
						<div className="carousel-body">
						<div className="border-layer">
							<Carousel 
							autoplay="true"
							
							>
						    <div> <img alt="" src={require('../../img/homeimg/lunbo1.png')}/></div>
						    <div> <img alt="" src={require('../../img/homeimg/lunbo2.png')}/></div>
						  </Carousel>
						</div>
						</div>
					</header>
				<section className="csu-detail-desc">
					<section className="csu-info">
						<div className="csu-name">
						<span className="csu-text">
			            [杜康]御藏（柔和）酒500ml
			          </span>
			          </div>
			          <div className="csu-top-desc">
			          <section className="csu-other-desc">
			          	<div className="multi">
			          	酒水透明清亮，酒味醇香，价格适中深受广大消费者喜爱！是亲朋好友相聚，餐桌共享的必备佳酿！
            				
            				</div>
			          </section>
			          </div>
					</section>
					
					<section className="csu-info">
						<div className="csu-price">
							<div className="csu-price-container"> 
							<div className="csu-primary-price">
							<div className="visible-for-login">
								  登录可见价格
								</div>
							</div>
							</div>
							</div>
					</section>
					
				</section>
				</div>
			</div>
		)
	}
}

export default List;