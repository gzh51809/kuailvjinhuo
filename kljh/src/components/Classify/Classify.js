import React, {
	Component
} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'
import '../../sass/classify/classify.scss'
class Classify extends Component {

	constructor() {
		super();
		this.state = {
			classify: [],
			leibie: [],
			content:[]
		}
		this.tolist=this.tolist.bind(this);
	}
	
	tolist(e){
		this.props.history.push("/list")
	}
	
	
	

	componentDidMount() {
		axios.get("http://localhost:3334/", {
			params: {
				toubu: "http://www.kuailvzaixian.com/wxmall/api/goods/category/first/list?cityId=440600&_=1549936055712",
			}
		}).then(res => {
			let data1 = res.data.data.categoryList
//			console.log(res.data.data.categoryList)
			this.setState({
				classify: data1,
			})
		})

		axios.get("http://localhost:3334/", {
			params: {
				lei: "http://www.kuailvzaixian.com/wxmall/api/goods/category/second/list?cityId=440600&cat1Id=1001108&_=1549936055853",
			}
		}).then(res => {
			let data2 = res.data.data.categoryList
//			console.log(res.data.data.categoryList)
			this.setState({
				leibie: data2,
			})
		})
		
		axios.get("http://localhost:3334/", {
			params: {
				con: "http://www.kuailvzaixian.com/wxmall/api/goods/list?cat1Id=1001108&cat2Id=-2000&pageNo=1&pageSize=20&cityId=440600&_=1549942010713",
			}
		}).then(res => {
			let data3 = res.data.data.goodsList
			console.log(res.data.data.goodsList)
			this.setState({
				content: data3,
			})
		})
		
	}

	render() {
		return(
			<div className="classify">
			<div className="category-page">
				<NavLink to="search">
				<div className="search-part">
					<div className="searchBar-part">
						<div className="search">
							<img alt="" className="icon-search" src={require('../../img/homeimg/search.png')} />
							<span className="search-placeholder">请输入商品名称</span>
						</div>
						</div>
					</div>
					</NavLink>
					<section className="category-level1">
						<div className="nav-list">
						{
							this.state.classify.map((item,idx)=>(
							<div className="nav-item" key={idx}>
								<div className="cate1-img">
								<img alt="" src={item.iconUrl} />
								</div>
								<div className="cate-name">{item.name}</div>
							</div>
							))
						}	
						</div>
					</section>
					
					<section className="Category-level2">
						<div className="nav2-list">
						{
							this.state.leibie.map((item,idx)=>(
						<div className="nav2-item" key={idx}>
							<img alt=""  src={item.iconUrl} />
							<span>{item.name}</span>
							</div>
							))
						}
						</div>
					</section>
					<div className="tags-part"><div className="cate-second-name">爆品</div></div>
					
					<section className="csulist-main-content">
						<div className="csu-content">
							{
								this.state.content.map((item,idx)=>(
							<div
							key={idx}
						
							>
								<div className="csu-card-container">
									<div className="csu-card-content">
										
										<div className="image-box-container">
											<div className="image-box">
											<img alt="" src={item.spuResVo.picUrls} />
											</div>
										</div>
									<div className="csu-info">
												<div className="csu-name"> {item.spuResVo.spuTitle} </div>
									         <div className="csu-other-tag-group"></div>
									       		<div className="csu-info-bottom">
									       		<div className="csu-unit-desc">{item.spuResVo.skuDescCombination}</div>
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
							</div>
							)) 
						}
						</div>
					</section>
					
				</div>
			</div>
		)
	}
}

export default Classify;