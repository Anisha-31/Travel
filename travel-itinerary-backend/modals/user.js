const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = new mongoose.Schema({
    username:{type:String , require : true},
    email:{type:String , require : true},
    password:{type:String , require:  true}
})
user.pre("save",async function (next){
if(!this.isModified("password")) return next();
this.password = await bcrypt.hash(this.password , 10);
next();
})

module.exports = mongoose.model("User", user);