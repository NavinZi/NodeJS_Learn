const express = require('express')
const path = require('path')
const router = express.Router()

router.get('/home',(req,res)=>{
    // res.status(200)
    // res.type('text/html')
    // res.sendFile(path.join(__dirname,'../public/index.html'))
    res.render('index.ejs')
})

router.get('/Register',(req,res)=>{
    // res.status(200)
    // res.type('text/html')
    // res.sendFile(path.join(__dirname,'../public/Register.html'))
    res.render('Register.ejs',{message:"normal"})
})

module.exports = router