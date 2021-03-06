"use strict";

//모듈
const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const logger = require("./src/config/logger");
const dotenv = require("dotenv"); //환경변수 (개발을 팀단위로 하기 때문에 OS가 다를 수 있음 -> 동일하게 환경변수를 등록하고 가져올 수 있음)



const app = express();
dotenv.config();

const accessLogStream = require("./src/config/log");
//라우팅
const home = require("./src/routes/home");



// const logger = require("./src/config/logger");
// logger.error("hello !!");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan("tiny", {stream: logger.stream}));

// app.use(morgan("dev"));
// app.use(morgan("common", {stream: accessLogStream}) ); 

app.use("/" , home); // use => 미들웨어를 등록해주는 메소드

module.exports = app;