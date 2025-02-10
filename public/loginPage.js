"use strict";

class UserForm {
  constructor(data) {
    this.userMap = new Map(data.map);
  }

  loginFormCallback(login, password) {
    this.userMap.set(login, password);
  }
}

const usersData = {
  map: [
    ["oleg@demo.ru", "demo"],
    ["ivan@demo.ru", "demo"],
    ["petr@demo.ru", "demo"],
    ["galina@demo.ru", "demo"],
    ["vladimir@demo.ru", "demo"],
  ],
};

const user = new UserForm(usersData);
user.loginFormCallback("alexey@demo.ru", "demo")
console.log(user.userMap);