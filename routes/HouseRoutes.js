const express = require('express')
const Housemodel = require('../models/houseschema')

const houseRouter = express()

houseRouter.get('/',async (req, res)=>{
    try{
        const houseInfo= await Housemodel.find({});
        res.status(200).send(houseInfo)
    }catch(error){
        res.status(500).send(e)
    }
}


)
// module.exports = houseRouter
module.exports =  houseRouter;