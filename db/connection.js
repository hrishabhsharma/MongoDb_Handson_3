const mongoose = require("mongoose");

const connecttodb = (URI) => 
    mongoose.connect(URI)
    .then(()=>console.log("Connected to Mongoose..............."))
    .catch((e)=>console.log(e))


module.exports = connecttodb