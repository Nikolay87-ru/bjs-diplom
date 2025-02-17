"use strict";

const logoutButton = new LogoutButton();

logoutButton.action = () => {
  ApiConnector.logout((response) => {
    if (response.success) {
      location.reload();
    }
  });
};

ApiConnector.current((response) => {
  if (response.success) {
    ProfileWidget.showProfile(response.data);
  }
});

const ratesBoard = new RatesBoard();

function getExchangeRate() {
  ApiConnector.getStocks((response) => {
    if (response.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(response.data);
    }
  });
}

getExchangeRate();

const intervalId = setInterval(getExchangeRate, 60000);

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(true, "Баланс пополнен!");
    } else {
      moneyManager.setMessage(
        false,
        "Ошибка пополнения счета! Введите сумму и выберите валюту!"
      );
    }
  });
};

moneyManager.conversionMoneyCallback = (data) => {

  ApiConnector.convertMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(true, "Конвертация прошла успешно!");
    } else {
      moneyManager.setMessage(
        false,
        "У вас недостаточно средств на счете для конвертации! Введите сумму и выберите конвертируемую валюту!"
      );
    }
  });
};

moneyManager.sendMoneyCallback = (data) => {

  ApiConnector.transferMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(
        true,
        "Перевод денег прошел успешно!"
      );
    } else {
      moneyManager.setMessage(
        false,
        "Ошибка перевода! Выберите пользователя, которому будут переведены деньги, введите сумму и выберите валюту! Сумма перевода не должна превышать сумму на вашем счету!"
      );
    }
  });
};

const favoritesWidget = new FavoritesWidget();

ApiConnector.getFavorites((response) => {
  if (response.success) {
    favoritesWidget.clearTable();
    favoritesWidget.fillTable(response.data);
    moneyManager.updateUsersList(response.data);
  }
});

favoritesWidget.addUserCallback = (data) => {
  ApiConnector.addUserToFavorites(data, (response) => {
    if (response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
      favoritesWidget.setMessage(
        true,
        "Пользователь добавлен в избранное!"
      );
    } else {
      favoritesWidget.setMessage(
        false,
        "Ошибка! Введите id и имя пользователя!"
      );
    }
  });
};

favoritesWidget.removeUserCallback = (data) => {
  ApiConnector.removeUserFromFavorites(data, (response) => {
    if (response.success) {
      favoritesWidget.clearTable();
      favoritesWidget.fillTable(response.data);
      moneyManager.updateUsersList(response.data);
      favoritesWidget.setMessage(
        true,
        "Пользователь удален!"
      );
    } 
  });
};
