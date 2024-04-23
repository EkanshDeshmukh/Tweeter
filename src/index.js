const express = require("express");
const connect = require("./config/database");
const app = express();


app.listen(3000, async()=>{
    console.log('listening on port');
   await connect()
   console.log('MongoDB connection established');
})
