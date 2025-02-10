"use strict"

class UserForm {
  constructor(data) {
    this.userMap = new Map(data.map);
  }

  loginFormCallback(data) {
    ApiConnector.login(data, (success) => {
      if (success === true) {
        location.reload();
      } else {
        console.warn(`Пользователь с логином ${response} и указанным паролем не найден`) || alert(data);
      }
    });
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
