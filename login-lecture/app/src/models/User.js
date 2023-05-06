"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: "wrong password" };
    }
    return { success: false, msg: "id does not exist" };
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}
module.exports = User;
