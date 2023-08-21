const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config()


// connect to mongodb compass

const PORT = process.env.PORT || 5000;


const mongoConnect = async()=>{
await mongoose.connect(process.env.MONGO_URI)
.then(()=> app.listen(PORT, ()=> console.log(`server running on port ${PORT}`)))
.catch(async(error)=> {
   console.log(error.message)
  //  @ts-ignore
   setTimeout(await mongoConnect(), 3000);
});
}
mongoConnect();