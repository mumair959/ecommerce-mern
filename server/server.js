import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {readdirSync} from "fs"

const morgan = require("morgan");
require("dotenv").config();

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors : {
        origin : process.env.CLIENT_URL,
        methods : ["GET","POST"],
        allowedHeaders : ["Content-type"] 
    }
});

//DATABASE

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => console.log('DB CONNECTED'))
.catch((err) => console.log(err));

//MIDDLEWARE

app.use(express.json({limit : '5mb'}));
app.use(express.urlencoded({extended : true}));
app.use(cors({
    origin : [process.env.CLIENT_URL]
}));


// AUTOLOAD ROUTES

readdirSync("./routes").map((r) => {
    app.use("/api/"+process.env.API_VERSION,require(`./routes/${r}`))
});

// SOCKET

io.on("connect" , (socket) => {
    console.log('Socket.IO',socket.id);
});


// SERVER RUNNING

const port = process.env.port || 8000;

http.listen(port,() => {
    console.log(`SERVER RUNNING ON ${port}`);
});