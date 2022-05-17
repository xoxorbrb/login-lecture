"use strict";

const logger = require('../../config/logger');
const User = require('../../models/User');

const output = {
    home: (req, res) => {
        logger.info(`"GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
},
    login: (req, res) => {
        logger.info(`"GET /login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
},
    register: (req, res) => {
        logger.info(`"GET /register 200 "회원가입 화면으로 이동"`);
        res.render("home/register");
},
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login(); // login이 async await함수이기 때문에 Promise를 반환해주도록 되어있어, await을 적용해줄 수 있음
        if (response.err) logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`);
        else {
            logger.info(
                `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) logger.error(`POST /login 200 Response: "success: ${response.success}, ${response.err}"`);
        else{
            logger.info(
                `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
            );
        }
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};
