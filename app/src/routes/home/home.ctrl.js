"use strict";

const User = require('../../models/User');

const output = {
    home: (req, res) => {
        res.render("home/index");
},
    login: (req, res) => {
        res.render("home/login");
},
    register: (req, res) => {
        res.render("home/register");
},
};

const process = {
    login: async (req, res) => {
        const user = new User(req.body);
        const response = await user.login(); // login이 async await함수이기 때문에 Promise를 반환해주도록 되어있어, await을 적용해줄 수 있음
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};
module.exports = {
    output,
    process,
};
