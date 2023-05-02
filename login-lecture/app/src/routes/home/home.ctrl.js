"use strict";

const users = {
  id: ["11", "22", "aa"],
  pw: ["11", "22", "bb"],
};

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          sucess: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "login failed",
    });
  },
};

module.exports = {
  output,
  process,
};
