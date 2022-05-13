"use strict";

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
pw = document.querySelector("#pw"),
confirmPw = document.querySelector("#confirm-pw"),
registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (pw.value !== confirmPw.value) return alert("비밀번호가 일치하지 않습니다.");
    const req = {
        id: id.value,
        name: name.value,
        pw: pw.value,
    };
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),

    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/login";
        }
        else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중에 에러가 발생하였습니다."); //console.log(new Error("로그인 중에 ~~")를 쓰면 Error: 로그인 중에 에러가 발생하였습니다 출력 
    })                                                                  // .then(console.log) == .then((res) => console.log(res));
}