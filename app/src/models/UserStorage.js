"use strict";

const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userKey = Object.keys(users);
        const userInfo = userKey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
    }, {});
    return userInfo;
    }
    static getUsers(...fields) {
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});   //{}는 newUsers에 들어감.
        return  newUsers;
    }

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);
    }
    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pw.push(userInfo.pw);
        return {success: true};
    }
}

module.exports = UserStorage;