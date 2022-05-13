"use strict";

const UserStorage = require("./UserStorage");
class User {
    constructor(body) {
        this.body = body;
    }

    async login() {   //await 을 사용하기 위해 비동기 함수로 바꿈
        const client = this.body;
        const {id, pw} = await UserStorage.getUserInfo(client.id);
        if(id){
            if(id === client.id && pw === client.pw) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."}
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."}
    }
    
    async register() {
        try {
        const client = this.body;
        const response = await UserStorage.save(client);
        return response;
        } catch (err) {
            return {success: false, msg: err};
        }
    }
}

module.exports = User;