require("dotenv").config();
const express=require("express");
const app=express();
require("./db/Connection")
const products=require("./models/Productschema")
const DefaultData=require("./defaultdata")
const cors=require("cors");
const mongoose = require("mongoose");
const router=require("./routes/router");

app.use(express.json());
app.use(cors());
app.use(router);

const port=8005;
 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
mongoose.connection.on('connected', async () => {
    console.log("Connected to MongoDB Atlas");

    
    try {
        await DefaultData();
    } catch (error) {
        console.error("Error during default data insertion:", error.message);
    }
});

mongoose.connection.on('error', (error) => {
    console.error("Error connecting to MongoDB Atlas:", error.message);
});
