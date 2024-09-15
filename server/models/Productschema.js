const mongoose=require('mongoose')

const Productschema=new mongoose.Schema({
    id:String,
    url:String,
    title:Object,
    price:Object,
    description:String,
    discount:String,
    tagline:String
})

const Products= new mongoose.model("products",Productschema);

module.exports=Products;