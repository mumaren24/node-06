const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//get传参的第二种方式，就是通过子路径的形式来进行传参，这种方式我们需要设计成/user/:id才可以监听
// 这种形式获取url那边用户输入的参数，我们叫restful形式的接口
// app.get('/user/:id',(req,res)=>{
//     console.log(req.params);//用params方法来获取参数
//     console.log('对应的是/user/123这样的路径')
//     res.send('user')
// })

// get传参两种形式传参,?id=123，这种方式，直接写路径就可以监听
app.get('/user',(req,res)=>{
    console.log(req.query);//用query方法来获取参数
    console.log('对应的是user?id=123这样的路径')
    res.send('ok')
})

//post
app.post('/postData',(req,res)=>{
    console.log(req.body);
    res.send('postok')
})

app.listen(3000)