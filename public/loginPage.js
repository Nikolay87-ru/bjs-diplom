"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      console.error(
        `Пользователь с логином ${data.login} и указанным паролем не найден`
      );
      alert("Ошибка входа: Неверный логин или пароль");
    }
  });
}

userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      console.errer(
        `Пользователь с логином ${data.login} и указанным паролем не найден`
      );
      alert("Ошибка входа: Неверный логин или пароль");
    }
  });
}