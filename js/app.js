'use stict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookiesPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookiesPerPerson = averageCookiesPerPerson;
  this.customerEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
}

Store.prototype.calcCustomersEachHour = function() {
  for(var i=0; i<hours.length; i++) {
    var customerThisHour = getRandomNumber (this.minCustomerPerHour,this.maxCustomerPerHour);

    this.customerEachHour.push(customerThisHour) ;

  }
};

Store.prototype.calcCookiesSoldEachHour = function(){
  for(var i=0; i<this.customerEachHour.length; i++) {
    var totalCookies = Math.round(this.customerEachHour[i]* this.averageCookiesPerPerson);
    this.cookiesSoldEachHour.push(totalCookies);

  }
};

Store.prototype.calcTotalCookiesForTheDay = function(){
  this.calcCustomersEachHour();
  this.calcCookiesSoldEachHour();
  for(var i=0; i<this.cookiesSoldEachHour.length; i++ ) {
    this.totalCookiesForTheDay += this.cookiesSoldEachHour [i];

  }
};

Store.prototype.render = function() {
  this.calcTotalCookiesForTheDay();

  var parentElement = document.getElementById('table');

  var tableRow = document.createElement('tr');

  var tableHeader = document.createElement('th');

  tableHeader.textContent = this.name;
  tableRow.appendChild(tableHeader);

  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    var tableData = document.createElement('td');
    tableData.textContent = this.cookiesSoldEachHour[i];
    tableRow.appendChild(tableData);

  }

  tableData = document.createElement('td');
  tableData.textContent = this.totalCookiesForTheDay;
  tableRow.appendChild(tableData);
  parentElement.appendChild(tableRow);
};

function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min + 1)) + min;

}

var seattle = new Store ('Seattle', 23, 65, 6.3);
var tokyo = new Store ('Tokyo', 3, 24 , 1.2);
var dubai = new Store ('Dubau', 23, 65, 6.3);
var paris = new Store ('Pairs', 20, 38, 2.3);
var lima = new Store ('Lima', 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

