const express = require('express');
const path = require('path');

const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(__dirname))


app.get('/',(req,res)=>{
    res.send('Hello World');s
})

app.get('/about-us',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'))
})


app.get('/contact-me',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact-me.html'))
})

app.get('/about-us',(req,res)=>{
    res.sendFile(path.join(__dirname,'404.html'))
})

app.listen(port,hostname,()=>{
    console.log(`Server at http://${hostname}:${port}/`);
})