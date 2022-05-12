"use strict";

class UserStorage {
    static #users = {    //public한 변수를 private 변수로 선언해주는 표시 #
        id: ["xoxorbrb", "qkrxorb", "xorb"],
        pw: ["1234", "3456", "5678"],
        name: ["태태규규", "박사장" , "박태규"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});   //{}는 newUsers에 들어감.
        return  newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKey = Object.keys(users);
        const userInfo = userKey.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage;