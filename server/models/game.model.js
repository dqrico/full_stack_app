const mongoose = require("mongoose");


//Model + Schema = shape/structure our document & connect with a specific collection in the DB
//Schema defines Document Structure, default values and validators.

const GameSchema = new mongoose.Schema({
    
    // "_id" field AUTOMATICALLY created for each new document

    name:{
        type: String,
        required: [true, "Game's name is Required"],
        minlength: [3, "Name's length must be at least 3 characters"]
    },
    yearReleased:{
        type: Number,
        required: [true, "Game's Release Year is Required"],
        min: [1950, "No game made before year 1950"]
    },
    genre:{
        type: String,
        required: [true, "Genre is Required"],
        enum: [
            "Action",
            "Platform",
            "Shooter",
            "Role Playing",
            "Puzzle"
        ] 
    },
    image:{
        type: String,
        required: [true, "Picture is Required"]
    },
    rating:{
        type: String,
        enum: [
            "E",
            "T",
            "MA",
            "E10",
            "Not Rated"
        ] 
    },
    company:{
        type: String
    }
    
}, {timestamps: true})

/*
TIMESTAMPS:
1. document "createdAt" date/time recorded
2. document "updatedAt" date/time recorded
*/

/*
MODEL:
1. Singular/Capitalized version of DB collection name 2. SCHEMA 
*/

const Game = mongoose.model("Game", GameSchema);
//Mongoose model = database interface for creating, querying, updating, deleting records, etc.


//Export model - to be imported/used by controller. 
//Game.find({}) = e.g. find all documents inside of collection

module.exports = Game;