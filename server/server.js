const express = require("express");
const cors = require("cors");
const app = express();

// MIDDLEWARE
//Required for POST + PUT CALLS (avoids TyperErrors on "post" calls)

//Parses incoming requests consisting of JSON payloads. (i.e. recognizes Request object as JSON object)
app.use(express.json()); 

//Parses incoming requests consisting of STRING/ARRAY JSON payloads. (i.e. recognizes Request Object as STRING or ARRAY)
app.use(express.urlencoded({extended: true})); 

//Allows front-end (port 3000) to call back-end (port 8000). (avoids "cors erros" when attenmpting axios calls)
app.use(cors({
    origin: "http://localhost:3000"
}))

require("./config/mongoose.config");

//Shorthand: passing in "(app)" from routes.js
require("./routes/game.routes")(app);

//Longform: without passing "(app)" from routes.js
//const gameRoutes = require("./routes/game.routes");
//gameRoutes(app);

app.listen(8000, ()=> console.log("Locked and Loaded on port 8000"))