"use strict";

const id = document.querySelector("#id"),
  pw = document.querySelector("#pw"),
  loginBtn = document.querySelector("#button");

const login = () => {
  if (!id.value) return alert("input id");
  if (!pw.value) return alert("input password");
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/";
      } else {
        if (res.err) return alert(JSON.stringify(res.err));
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("login error");
    });
};

loginBtn.addEventListener("click", login);
