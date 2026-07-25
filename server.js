const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();


const app = express();


app.use(cors());

app.use(express.json());





app.post("/create-payment", async (req,res)=>{


try{


const {

amount,

currency,

email,

phone,

method


}=req.body;



console.log("Payment request received:", {

amount,

currency,

email,

phone,

method

});




res.json({

message:"Payment request created 🌾",

status:"Pending"


});



}

catch(error){


res.status(500).json({

error:error.message

});


}


});






app.listen(5000,()=>{


console.log("🚀 Server running at http://localhost:5000");


});