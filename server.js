const express = require("express");
const app = express();
require("dotenv").config();

const dbConfig = require("./config/dbConfig");

const port = process.env.port || 8000;
console.log(process.env.MONGO_URl);
app.listen(port, () => console.log(`server is running at port ${port}`));
