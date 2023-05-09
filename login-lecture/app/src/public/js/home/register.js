"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  pw = document.querySelector("#pw"),
  confirmPw = document.querySelector("#confirm-pw"),
  registerBtn = document.querySelector("#button");

const register = () => {
  if (!id.value) return alert("input Id");
  if (!pw.value) return alert("input password");
  if (pw.value !== confirmPw.value) return alert("wrong confrim password");
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        if (res.err) return alert(JSON.stringify(res.err));
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("register error");
    });
};

registerBtn.addEventListener("click", register);
