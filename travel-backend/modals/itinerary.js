const mongoose = require("mongoose");

const itinerary = new mongoose.Schema({
    title:{type :"string"  , require : true} ,
    description :{type : "string" , require:true},
    // date : Date.now,

})

module.exports = mongoose.model("Itinerary", itinerary);