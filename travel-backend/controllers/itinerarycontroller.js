const itinerary = require('../modals/itinerary')

exports.created=async(req,res)=>{
    try{
        const {title,description}=req.body
        const new_itinerary=itinerary({title,description});
        await new_itinerary.save();
        res.status(201).json({message:'Itinerary Created'})
    }
    catch(error){
        res.status(400).json({error:error.reason || error.message || 'create'})
    }
}
exports.deleted=async(req,res)=>{
try{
    const {title,description}=req.body
    const exist_iti=await itinerary.findOne({title})

    await exist_iti.deleteOne({title})
    res.status(201).json({message:'Itinerary Deleted'})

}catch(error){
    res.status(400).json({error:error.reason})
}

}

exports.get=async(req,res)=>{
    try{
        const {title,description}=req.body
        const exist_iti=await itinerary.findOne({title})
        if(!exist_iti) return res.status(400).json({message: 'No such itinerary'})
            console.log(exist_iti)
           
    }
    catch(error){
        res.status(400).json({error:error.reason})
    }
}

exports.update=async(req,res)=>{
    try{

        const {id} = req.params;
        const {title,description}=req.body

        const exist_iti=await itinerary.findbyID(id);

        if(!exist_iti) return res.status(400).json({message: 'No such itinerary'})

         
            if(exist_iti.user.toString() !== req.user.id) return res.status(400).json({message: 'No Authorised to update'});


            

    }catch(error){

    }
}