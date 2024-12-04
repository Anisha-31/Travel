// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
//  import express from 'express';
// dotenv.config();


const express = require("express");
const mongoose=require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();


mongoose.connect(process.env.MONGO)
.then(()=>(console.log("database is connected")))
.catch((err)=>(console.log(err)));



const app =express();
const authRoutes = require("./routes/auth");
const itiRoutes=require("./routes/itinerary")
app.use(bodyparser.json());
app.use(cors());


app.use("/api/auth",authRoutes);
app.use("/api/auth",itiRoutes);


const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>(console.log("Server is running")));


