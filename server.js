// const http = require('http')
// const fs = require('fs')
// const match = require('nodemon/lib/monitor/match')
// const port = 8888

// const MainPage = fs.readFileSync('./index.html','utf-8')
// const RegPage = fs.readFileSync('./Register.html','utf-8')

// const server = http.createServer((req, res) => {
//     const url = req.url
//     if(url === "/" || url === "/home"){
//         res.writeHead(200)
//         res.end(MainPage)
//     }
//     else if (url === "/Register"){
//         res.writeHead(200)
//         res.end(RegPage)
//     }
//     else{
//         res.writeHead(404)
//         res.end("<h1>404 Error : Page Not Found!!</h1>")
//     }
// }).listen(port, (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(`Server Started on port ${port}`);
// })


// EXPRESS JS //

const express = require('express')
const router = require('./routes/route.js');
const app = express()
const port = 8888

app.use(router)
app.listen(port,()=>{
    console.log(`Server Started on port ${port}`);
})
