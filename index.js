const express = require("express")
const mongoose = require('mongoose')
const houseRouter = require("./routes/HouseRoutes")
const enquiryRouter = require("./routes/EnquiryRoutes")
const userRouter = require("./routes/userRoutes")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT
const cors = require('cors')


app.use(express.json())
app.use(cors())


const db = module.exports= async ()=>{
    try{
        await mongoose.connect(process.env.MONGODBURL,{
            user : process.env.DBUSER,
            pass : process.env.DBPASS 
        })
        console.log("MongoDB Connection is successful")
    }catch(e){
        console.log(e);
        console.log("MongoDB Connection is not successful")
    }
}
db();

app.use("/house/",houseRouter)
app.use("/enquiry",enquiryRouter)
app.use("/user",userRouter)
app.listen(port, () => {
    console.log('Server running on port 5000');
  });