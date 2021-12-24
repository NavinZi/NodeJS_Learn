const http = require('http')
const fs = require('fs')
const match = require('nodemon/lib/monitor/match')
const port = 8888

const MainPage = fs.readFileSync('./index.html','utf-8')
const RegPage = fs.readFileSync('./Register.html','utf-8')

const server = http.createServer((req, res) => {
    const url = req.url
    if(url === "/" || url === "/home"){
        res.writeHead(200)
        res.end(MainPage)
    }
    else if (url === "/Register"){
        res.writeHead(200)
        res.end(RegPage)
    }
    else{
        res.writeHead(404)
        res.end("<h1>404 Error : Page Not Found!!</h1>")
    }
}).listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`Server Started on port ${port}`);
    //
})


// fs.readFile('./index.html', (err, html) => {
//     if (err) {
//         throw err
//     }
//     http.createServer((req, res) => {
//         res.writeHeader(200, { "Content-Type": "text/html" });
//         res.write(html);
//         res.end();
//     }).listen(port, (err) => {
//         if (err) {
//             throw err
//         }
//         console.log(`Server Started on port ${port}`)
//     })
// })
