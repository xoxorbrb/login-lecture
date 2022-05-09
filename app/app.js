"use strict";

const express = require("express");
const app = express();
const home = require("./src/routes/home");

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));


app.use("/" , home); // use => 미들웨어를 등록해주는 메소드

module.exports = app;