"use strict";

const { response } = require("express");

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
  ApiConnector.getStocks(answer => {
    if (answer.success) {
      clearTable();
      ratesBoard.fillTable(data);
    } 
  })
}

getExchangeRate()

