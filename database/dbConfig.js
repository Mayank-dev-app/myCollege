const mongose = require("mongoose");
require("dotenv").config();

//Defiene MongoUrl
const mongo_URL = process.env.DB_URL;

//Set up mongodb connection
 mongose.connect(mongo_URL);

const db= mongose.connection;

//Add even listener 
db.on('connected', ()=>{
    console.log("Databse is successfully connected");
});

db.on('error', ()=>{
    console.log("Databse have some error");
});

db.on('disconnected', ()=>{
    console.log("Databse is disconnected");
});

module.exports = db;