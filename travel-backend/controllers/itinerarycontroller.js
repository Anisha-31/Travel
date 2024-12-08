const itinerary = require('../modals/itinerary')

exports.created = async (req, res) => {
    try {
        const { title, description } = req.body
        const new_itinerary = itinerary({ title, description });
        await new_itinerary.save();
        res.status(201).json({ message: 'Itinerary Created' })
    }
    catch (error) {
        res.status(400).json({ error: error.reason || error.message || 'create' })
    }
}
exports.deleted = async (req, res) => {
    try {

        const { id } = req.params
        // Validate MongoDB ObjectID
        //  if (!mongoose.Types.ObjectId.isValid(id)) {
        //     console.log("if condition")
        //     return res.status(400).json({ message: "Invalid ID format" });
        //   }

        const exist_iti = await itinerary.findById(id)

        await exist_iti.deleteOne()
        res.status(201).json({ message: 'Itinerary Deleted' })

    } catch (error) {
        res.status(400).json({ error: error.reason })
    }

}

exports.get = async (req, res) => {
    try {
        const itineraries = await itinerary.find(); // Fetch all itineraries
        res.status(200).json(itineraries);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

}

exports.update = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description } = req.body

        const exist_iti = await itinerary.findbyID(id);

        if (!exist_iti) return res.status(400).json({ message: 'No such itinerary' })


        if (exist_iti.user.toString() !== req.user.id) return res.status(400).json({ message: 'No Authorised to update' });




    } catch (error) {

    }
}