var express = require('express')
var app = express()
app.use(express.static("./dist"));
app.get('./', (req, res)=> {
    res.sendFile("./index.html");
})
app.listen(9000)

console.log('http://localhost:9000')
console.log('服务器开启成功1');


                                                            