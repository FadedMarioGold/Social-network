const Products=require("./models/Productschema");
const { products, indieGames, preOrders, demos }=require("./constant/Product");

const DefaultData=async()=>{
    try{
      await Products.deleteMany({});
     await Products.insertMany(products);
      await Products.insertMany(indieGames);
      await Products.insertMany(preOrders);
      await Products.insertMany(demos);

      console.log("Products Data:", products);
      console.log("Indie Games Data:", indieGames);
      console.log("Pre-orders Data:", preOrders);
      console.log("Demos Data:", demos);
    }catch(error){
      console.log("error"+error.message);
    }
}
module.exports=DefaultData;