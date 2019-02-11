import React from 'react';
import axios from 'axios'
import { Carousel } from 'antd-mobile';
import '../../sass/home/homebody.scss'

class Homebody extends React.Component {

	constructor() {
		super();
		this.state = {
			dataList: [],
			categoryList: [],
			goodlist:[],
		}
	}

	componentDidMount() {
		axios.get("http://localhost:3334/", {
			params: {
				rq: "http://www.kuailvzaixian.com/wxmall/api/promotion/banner/list?cityId=440600&channel=1&_=1549120491634",

			}
		}).then(res => {
			let data = res.data.data.bannerList
//			console.log(data)
			this.setState({
				dataList: data,
			})
		})
		axios.get("http://localhost:3334/", {
			params: {
				fenlei: "http://www.kuailvzaixian.com/wxmall/api/category/home/list?cityId=440600&_=1549129526460",
			}
		}).then(res => {
			let data1 = res.data.data.categoryList
//			console.log(res.data.data.categoryList)
			this.setState({
				categoryList: data1,
			})
		})
		
		axios.get("http://localhost:3334/", {
			params:{
				tuijian:"http://www.kuailvzaixian.com/wxmall/api/goods/recommendation/list?cityId=440600&pageNo=1&pageSize=20&_=1549469017061"

			}
		}).then(res => {
			let data2=res.data.data.goodsList
//			console.log(data2)
			this.setState({
				goodlist: data2,
			})
		})
	}
	render() {
		return(
			<div className="homebody">
			<div className="carousel-list-container">
			 <Carousel
                        autoplay={true}
                        infinite
                        >   
                         {this.state.dataList.map((item,idx) => (
                            <a
                            key={item}
                            href={item.link}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                src={this.state.dataList[idx].url}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                     </Carousel>
				</div>
				<div className="home-nav-item">
					<div className="nav-item-wrapper">
					{
						this.state.categoryList.map((item,idx)=>(
							<div className="icon-item" key={idx}>
							<a href="/m/category?cityId=440600&cat1Id=1001108&cate2Id=" >
								<div className="icon-img">
									<img alt="图片" src={item.iconUrl} />
								</div>
								<p className="icon-name">{item.name}</p>
							</a>
						</div>
						))
					}	
						
					</div>
				</div>
				
				<div className="home-sales">
					<div className="home-sales-title">活动精选</div>
					<div className="left-part">
					<img className="left-part-img"  alt=""src="//p0.meituan.net/klcmspic/97ce5361417384bdbd04bb8e677f5604111387.jpg.webp@314w_392h_1e_1c" />
					</div>
					<div className="right-part">
					<div className="right-top"><img alt="" src="//p0.meituan.net/klcmspic/226b68dbba04fd37ad332112fb11ef3494803.png.webp@396w_196h_1e_1c" />
					</div>
					<div className="right-bottom">
					<div className="right-left">
					<img alt="" src="//p1.meituan.net/klcmspic/83a5409be18c2aa6104168f2c1aef88094106.png.webp@396w_196h_1e_1c" />
					</div>
					</div>
					</div>
				</div>
				<div className="home-recommend">
				<div className="title">为你推荐</div>
					<div className="content"> 
						
						{
							this.state.goodlist.map((item,idx)=>(
						<div className="csu-card-container" key={idx}>
							<div className="csu-card-content">
							<div className="image-box-container">
								<div className="image-box">
								<img alt="" src={item.spuResVo.picUrls[0]} />
								</div>
							</div>
							<div className="csu-info">
								<div className="csu-name">
						          [中鹏]冬瓜茶植物饮料250ml
						        </div>
						        <div className="csu-other-tag-group"></div>
						        <div className="csu-info-bottom">
						        <div className="csu-unit-desc">24盒*250ml/箱</div>
						        <div className="csu-price-container">
						        <div className="csu-price">
						        <div className="visible-for-login">
								  登录可见价格
								</div>
						        </div>
						        <div className="csu-button-container">
						        	<div className="csu-item-touch">
						        	    <div className="csu-item-btn">
						        	    	<img alt="" src={require('../../img/homeimg/jiahao.png')} />
						        	    </div>
						        	</div>
						        </div>
						        </div>
						        </div>
							</div>
							</div>
						</div>
							))
						}
						<div className="no-more">没有更多了哦～</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Homebody;