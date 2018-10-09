const http = require('http')
const server = http.createServer()
server.on('request',function(req,res){
    res.writeHeader(200, { 
        'Content-Type': 'text/plain; charset=utf-8'
    })
    const url = req.url
    if(url==='/' || url==='/index.html'){
        res.end('首页')
    }else if(url==='/movie.html'){
        res.end('电影')
    }else if(url==='/about.html'){
        res.end('关于')
    }else{
        res.end('请求失败')
    }
 
})
//开启服务器
server.listen(3000,'127.0.0.1',function(){
    console.log('server running at http://127.0.0.1:3000')
})