const mongoose=require('mongoose')

const HouseSchema=new mongoose.Schema({
    _id: Number,
    address: String,
    county: String,
    description: String,
    price: Number,
    photo: String
})

const Housemodel = mongoose.model('House',HouseSchema)

module.exports = Housemodel
