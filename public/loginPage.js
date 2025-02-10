"use strict";

class UserForm {
  constructor(data) {
    this.userMap = new Map(data.map);
  }

  loginFormCallback(data) {
    this.userMap.set(data);
  }
}

const data = {
  map: [
    ["oleg@demo.ru", "demo"],
    ["ivan@demo.ru", "demo"],
    ["petr@demo.ru", "demo"],
    ["galina@demo.ru", "demo"],
    ["vladimir@demo.ru", "demo"],
  ],
};

const user = new UserForm(data);
console.log(user.userMap);