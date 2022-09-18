const mongoose = require("mongoose");


const dbName = "gamesDB";

//if a DB by this name does not exist before running the first time, then this will create it

mongoose.connect("mongodb+srv://davidqrico:gloZRMIKsjK5JtyO@cluster0.9anp9vs.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log(`Connected to the database called ${dbName}`)
    })
    .catch((err)=>{
        console.log(`error connecting to ${dbName}. Error:`,err)
    })