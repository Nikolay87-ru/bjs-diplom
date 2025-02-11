"use strict";

// class UserForm {
// constructor(data) {
//   this.userMap = new Map(data.map);
// }
const userForm = new UserForm(data);

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      console.warn(
        `Пользователь с логином ${data.login} и указанным паролем не найден`
      );
      alert("Ошибка входа: Неверный логин или пароль");
    }
  });
};
// }

// const data = {
//   map: [
//     ["oleg@demo.ru", "demo"],
//     ["ivan@demo.ru", "demo"],
//     ["petr@demo.ru", "demo"],
//     ["galina@demo.ru", "demo"],
//     ["vladimir@demo.ru", "demo"],
//   ],
// };

// userForm.loginFormCallback = (data) => {
//   ApiConnector.login(data, callback);
// };

// console.log(userForm.userMap);
