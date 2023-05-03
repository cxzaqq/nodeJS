"use strict";

class UserStorage {
  static #users = {
    id: ["11", "22", "aa"],
    pw: ["11", "22", "bb"],
    name: ["11", "22", "aa"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
