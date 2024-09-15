const express=require("express");
const router=new express.Router();
const Products=require("../models/Productschema");

router.get("/getproducts",async(req,res)=>{
    try{
        const productdata=await Products.find();
        // console.log("console the data"+productdata);
        res.status(201).json(productdata);
    }catch(error){
        console.log("error"+ error.message);
    }
})



module.exports=router;