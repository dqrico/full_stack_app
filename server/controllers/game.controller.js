const mongoose = require("mongoose");
const Game = require('../models/game.model');


// Exporting Object of key-value pairs. 
// Key = Call reference / Value = Call itself (arrow func). 
// Calls can be accessed in game.routes.js

module.exports = {
    // CRUD functions use model to connect to Collection, then perform action on collection/documents
    // CREATE
    createNewGame: (req, res) =>{
        Game.create(req.body)
            .then((newGame)=>{
                console.log(newGame);
                res.json(newGame)
            })
            .catch((err)=>{
                console.log("error with createNew");
                //400 = response status set to display err (rejection of promise) - how we will eventually display our validations from the server
                //400 = client is communicating w/ server but client sent bad info.
                //404 = either call made to wrong place OR server not setup properly
                //200 = good to go
                res.status(400).json(err);
            })
    },
    
    // READ
    findAllGames: (req, res) => {
        Game.find() //find() left empty = default is all
            .then((allGames)=>{
                console.log(allGames);
                res.json(allGames);
            })
            .catch((err)=>{
                console.log("findAll failed");
                res.json({message: "Issue with findAll", error: err})
            })
    },

    findOneGame: (req, res)=>{
        Game.findOne({_id: req.params.id})
            .then((oneGame)=>{
                console.log(oneGame);
                res.json(oneGame)
            })
            .catch((err)=>{
                console.log("Find One Game Failed");
                res.json({message: "error with findOne", error: err})
            })
    },

    // UPDATE
    updateGame: (req, res)=>{
        Game.findOneAndUpdate({_id: req.params.id},
            req.body,
            {new: true, runValidators: true} // returns new document + allows validations below to work with "PUT"
            )
            .then((updatedGame)=>{
                console.log(updatedGame);
                res.json(updatedGame)
            })
            .catch((err)=>{
                console.log("Update Game Failed");
                //400 = response status set to display err (rejection of promise) - how we will eventually display our validations from the server
                //400 = client is communicating w/ server but client sent bad info.
                //404 = either call made to wrong place OR server not setup properly
                //200 = good to go
                res.status(400).json(err);
            })
    },

    // DELETE
    deleteGame: (req, res)=>{
        Game.deleteOne({_id: req.params.id})
            .then((deletedGame)=>{
                console.log(deletedGame);
                res.json(deletedGame)
            })
            .catch((err)=>{
                console.log("Delete One Game Failed");
                res.json({message: "error with deleteOne", error: err})
            })
    }
}