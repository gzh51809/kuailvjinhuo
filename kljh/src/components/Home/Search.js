import React from 'react';
import '../../sass/home/search.scss';
class Search extends React.Component{
	
	constructor(){
		super();
		this.state={
			
		}
		this.goBack = this.goBack.bind(this);
	}
	
	 goBack(){
        this.props.history.goBack();
    }
	
	
	render(){
		return(
			<div className="page-group">
				<div className="search-body">
					<div className="header">
					<div className="back" onClick={this.goBack}>
						<img alt="" src={require('../../img/homeimg/back.png')}/>
						</div>
						<div className="search-button">
						<button className="btn">搜索</button>
						</div>
						<div className="box">
							<div className="background">
								<form>
									<button className="submit"><img alt="" src={require('../../img/homeimg/search.png')} /></button>
									<div className="input-box">
									<input type="text" placeholder="请输入商品名称" />
									</div>
								
								</form>
							</div>
						</div>
					</div>
					
					<div className="search-history">
						<div className="background">
							<div className="no-result">
								<img alt="" src={require('../../img/homeimg/empty.png')}/>
								<p className="no-result-text">暂无搜索历史</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Search;