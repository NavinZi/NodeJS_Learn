const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/home',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,'../views/index.html'))
})

router.get('/Register',(req,res)=>{
    res.status(200)
    res.type('text/html')
    res.sendFile(path.join(__dirname,'../views/Register.html'))
})

module.exports = router