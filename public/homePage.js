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
  ApiConnector.getStocks(answer => {
    if (answer.success) {
      ratesBoard.clearTable();
      ratesBoard.fillTable(answer.data);
    } 
  })
}

getExchangeRate()

const intervalId = setInterval(getExchangeRate, 60000);
