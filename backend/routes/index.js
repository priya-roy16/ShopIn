var express = require('express');
var router = express.Router();
// var data = require('../data');
var config = require('../config')
var dotenv = require('dotenv')
var mongoose = require('mongoose')

dotenv.config();

const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).catch(error => console.log(error.reason))

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("API is working properly");
});
// router.get('/api/products',(req,res,next)=>{
//   console.log(data.products);
//   res.send(data.products);
// })
// router.get('/api/products/:id',(req,res,next)=>{
//   const productId = req.params.id;
//   const product = data.products.find(x=>x._id === productId)
//   if(product){
//     console.log("pp",product)
//     res.send(product);
//   }else
//     res.status(404).send({msg: "Product not found"});
// })
router.get('/login', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("API is working on Login");
});
module.exports = router;