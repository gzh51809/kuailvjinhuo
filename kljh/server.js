var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
  	let data=req.query.rq;
  	let fenlei=req.query.fenlei
	let tuijian=req.query.tuijian
	let toubu=req.query.toubu
	let lei=req.query.lei
	let con=req.query.con
    res.append("Access-Control-Allow-Origin","*")
    if(data=="http://www.kuailvzaixian.com/wxmall/api/promotion/banner/list?cityId=440600&channel=1&_=1549120491634"){
    	request.get("http://www.kuailvzaixian.com/wxmall/api/promotion/banner/list?cityId=440600&channel=1&_=1549120491634",(err,response,body)=>{
			res.send(body)
		})
    }
  	if(fenlei=="http://www.kuailvzaixian.com/wxmall/api/category/home/list?cityId=440600&_=1549129526460"){
    	request.get("http://www.kuailvzaixian.com/wxmall/api/category/home/list?cityId=440600&_=1549129526460",(err,response,body)=>{
			res.send(body)
		})
    }
 
 	if(tuijian=="http://www.kuailvzaixian.com/wxmall/api/goods/recommendation/list?cityId=440600&pageNo=1&pageSize=20&_=1549469017061"){
 		request.get("http://www.kuailvzaixian.com/wxmall/api/goods/recommendation/list?cityId=440600&pageNo=1&pageSize=20&_=1549469017061",(err,response,body)=>{
			res.send(body)
		})
 	}
 	
 	if(toubu=="http://www.kuailvzaixian.com/wxmall/api/goods/category/first/list?cityId=440600&_=1549936055712"){
 		request.get("http://www.kuailvzaixian.com/wxmall/api/goods/category/first/list?cityId=440600&_=1549936055712",(err,response,body)=>{
			res.send(body)
		})
 	}
 	
 	if(lei=="http://www.kuailvzaixian.com/wxmall/api/goods/category/second/list?cityId=440600&cat1Id=1001108&_=1549936055853"){
 		request.get("http://www.kuailvzaixian.com/wxmall/api/goods/category/second/list?cityId=440600&cat1Id=1001108&_=1549936055853",(err,response,body)=>{
			res.send(body)
		})
 	}
 	
 	if(con=="http://www.kuailvzaixian.com/wxmall/api/goods/list?cat1Id=1001108&cat2Id=-2000&pageNo=1&pageSize=20&cityId=440600&_=1549942010713"){
 		request.get("http://www.kuailvzaixian.com/wxmall/api/goods/list?cat1Id=1001108&cat2Id=-2000&pageNo=1&pageSize=20&cityId=440600&_=1549942010713",(err,response,body)=>{
			res.send(body)
		})
 	}
 
})
app.listen(3334)