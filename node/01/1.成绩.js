const fs = require('fs')
fs.readFile(__dirname + '/成绩.txt','utf-8',(err,dataStr)=>{
    if(err) return console.log('读取文件失败:' + err.message)
    let arr =dataStr.split(' ')
    let newArr =[]
    arr.forEach(item =>{
        let a=item[0]
        if(item[i]>a){
            let newScore = item[i]
             newArr.push(newScore)
        }
    })
    fs.writeFile(__dirname + '/成绩-ok.txt',newArr.join('\n'),(err)=>{
        if(err) return console.log('写入失败' +err.message)
        console.log('处理成绩成功')
    })
})
