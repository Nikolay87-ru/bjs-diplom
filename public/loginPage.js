"use strict";

class UserForm {
  constructor(data) {
    this.userMap = new Map(data.map);
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

const userForm = new UserForm(data);

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, callback);
};

console.log(userForm.userMap);
