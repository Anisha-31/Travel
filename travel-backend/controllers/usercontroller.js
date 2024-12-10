const user = require('../modals/user');
const bcrypt = require("bcrypt");

exports.register = async(req,res)=>{
    try{
        const {username , email , password , confirmpassword} = req.body
        const new_user = user({username , email , password, confirmpassword
        });
        const existing_email = await user.findOne({email})
        if(existing_email) return res.status(400).json({message:'User already exists'});
        await new_user.save();
        res.status(201).json({message:'User Saved Successfully'})

    }
    catch(error){
 res.status(400).json({message:error.message})
    }
}

exports.login = async(req,res)=>{
    try{
        const {email , password}=req.body
        const existing_user = await user.findOne({email})
        if(existing_user) return res.status(401).json({message:'User Not Found !'});
        const isMatch = await bcrypt.compare(password , existing_user.password);
        if(isMatch) return res.status(200).json({message:'Login Successful User found'})
        else{ 
     res.status(200).json({message:'Login Successful User found'})
        }
    }
    catch(error){
        res.status(400).json({message:error.message})
           }

}