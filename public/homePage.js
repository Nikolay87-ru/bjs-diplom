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

getExchangeRate()

const intervalId = setInterval(getExchangeRate, 60000);

const moneyManager = new MoneyManager();

moneyManager.addMoneyCallback = (data) => {
  ApiConnector.addMoney(data, (response) => {
    if (response.success) {
      ProfileWidget.showProfile(response.data);
      moneyManager.setMessage(response.success, "Баланс пополнен!");
    } else {
      moneyManager.setMessage(response.error, "Ошибка ввода! Введите сумму и выберите валюту!");
    }
  });
}
