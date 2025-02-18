// const express = require("express");
// const router = express.Router();
// const Product = require('../models/productModel')

// router.get("/getallproducts",(req,res)=>{

//     Product.find({},(err,docs)=>{
//         if(!err){
//             return res.json({data:docs})
//         }
//         else{
//             return res.status(400).json({message:'Something went wrong'})
//         }
//     })
    
// })

// module.exports = router


const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const router = express.Router();

// GET all products
router.get('/getallproducts', getAllProducts);

module.exports = router;
