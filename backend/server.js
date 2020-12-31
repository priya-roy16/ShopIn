// import express from 'express';
var express = require('express')
// import data from './data';
//var data = require('./data')
const app = express();

app.get("/api/products",(req,res)=>{
    res.send(data.products);
})

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});

