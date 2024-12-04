const express = require('express')
const {created , deleted , get , update}= require('../controllers/itinerarycontroller')
const router = express.Router();

router.post("/create", created);
router.delete("/delete", deleted);
router.get("/get",get);
router.put("/update",update)
module.exports=router ;

