var express = require("express");
var request = require("request");

// 代理

var app = express();
app.get("/",(req,res)=>{
  	let data=req.query.rq;
  	let fenlei=req.query.fenlei

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
 
})
app.listen(3334)