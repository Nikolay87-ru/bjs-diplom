"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) => {
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      console.error(userForm.setLoginErrorMessage(response.message));
    }
  });
};

userForm.registerFormCallback = (data) => {
  ApiConnector.register(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
      console.error(userForm.setRegisterErrorMessage(response.message));
    }
  });
};
