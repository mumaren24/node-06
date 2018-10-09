const express = require('express');
const app = express();
//设置cors跨域
const cors = require('cors');
app.use(cors());
//bodyparser中间件
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
//这是数据服务器
const mysql = require('mysql');
//这里创建一个数据库连接对象，这个对象里面的query方法我们需要会使用
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'node10'
})

//路由
app.get('/getAllHero',(req,res)=>{
    //使用query方法查询数据库
    conn.query('select *from heros',(err,results)=>{
        res.send(results)
    })
})

//添加英雄
app.post('/addHero',(req,res)=>{
    conn.query('insert into heros set ?',req.body,(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.listen(5001,()=>{
    console.log('数据接口服务器已经启动')
})