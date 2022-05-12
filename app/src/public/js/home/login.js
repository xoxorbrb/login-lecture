"use strict";

const id = document.querySelector("#id"),
pw = document.querySelector("#pw"),
loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pw: pw.value,
    };
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),

    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("로그인 중에 에러가 발생하였습니다."); //console.log(new Error("로그인 중에 ~~")를 쓰면 Error: 로그인 중에 에러가 발생하였습니다 출력 
    })                                                                  // .then(console.log) == .then((res) => console.log(res));
}