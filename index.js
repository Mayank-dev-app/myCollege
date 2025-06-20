const express = require("express");
require("./database/dbConfig");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use("/api/v1/", require("./Router/message"));



app.listen(4004,()=> console.log("Port is running."));