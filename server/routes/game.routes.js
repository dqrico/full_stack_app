const GameController = require("../controllers/game.controller");


module.exports = (app) => {

    app.get("/api/games", GameController.findAllGames);    // GET HTTP =  data is only being read
    app.post("/api/games", GameController.createNewGame);  // POST HTTP = when data is being sent to server to create document

    //! CALLS WITH PARAMS - GO AFTER !
    // param (:id) MUST MATCH as defined in controller
    app.get("/api/games/:id", GameController.findOneGame);
    app.delete("/api/games/:id", GameController.deleteGame);
    app.put("/api/games/:id", GameController.updateGame);
    
}