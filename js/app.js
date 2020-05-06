'use stict';


//var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

var seattle = {
  name: 'Seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  // function 1
  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    // eslint-disable-next-line no-undef
    for(var i=0; i<this.hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
    console.log ('seattle customers per hour',this.customersEachHour);
  },

  //function 2
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
    console.log('seattle cookies per hour',this.cookiesSoldEachHour);
  },

  //function 3 sum cookies per day.
  sumCookiesPerDay: function(){
    var totalCookiesForTheDay = 0;
    for(var i=0; i<this.cookiesSoldEachHour.length;i++) {
      totalCookiesForTheDay = this.cookiesSoldEachHour[i] + totalCookiesForTheDay;
    }
    console.log('seattle cookies per day',this.totalCookiesForTheDay);
  },


  // function 4
  render: function (){
    var parent = document.getElementById('sales-data');
    var listItem = document.createElement('p');
    listItem.textContent = this.name;
    parent.appendChild(listItem);
  },

  // Function 5
  renderList: function (){
    var parent = document.getElementById('sales-data');
    for(var i = 0;i<this.hours.length;i++) {
      var listItem = document.createElement('li');
      listItem.textContent = (`${this.hours[i]}: ${this.cookiesSoldEachHour[i]} cookies`);
      parent.appendChild(listItem);
    }
  }

};

seattle.calcCustomersEachHour();
seattle.calcCookiesSoldEachHour();
seattle.sumCookiesPerDay();
seattle.render();
seattle.renderList();

// got this function from MDN Math.random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// second city: Tokyo
var tokyo = {
  name: 'tokyo',
  minCustomersEachHour: 3,
  maxCustomersEachHour: 24,
  averageCookiesSoldPerCustomer: 1.2,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  // function 1
  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<this.hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
    console.log ('tokyo customers per hour',this.customersEachHour);
  },

  //function 2
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
    console.log('tokyo cookies per hour',this.cookiesSoldEachHour);
  },

  //function 3 sum cookies per day.
  sumCookiesPerDay: function(){
    var totalCookiesForTheDay = 0;
    for(var i=0; i<this.cookiesSoldEachHour.length;i++) {
      totalCookiesForTheDay = this.cookiesSoldEachHour[i] + totalCookiesForTheDay;
    }
    console.log('tokyo cookies per day',this.totalCookiesForTheDay);
  }
};

tokyo.calcCustomersEachHour();
tokyo.calcCookiesSoldEachHour();
tokyo.sumCookiesPerDay();



// City three: Dubai
var dubai = {
  name: 'dubai',
  minCustomersEachHour: 11,
  maxCustomersEachHour: 38,
  averageCookiesSoldPerCustomer: 3.7,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  // function 1
  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<this.hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
    console.log ('dubai customers per hour',this.customersEachHour);
  },

  //function 2
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
    console.log('dubai cookies per hour',this.cookiesSoldEachHour);
  },

  //function 3 sum cookies per day.
  sumCookiesPerDay: function(){
    var totalCookiesForTheDay = 0;
    for(var i=0; i<this.cookiesSoldEachHour.length;i++) {
      totalCookiesForTheDay = this.cookiesSoldEachHour[i] + totalCookiesForTheDay;
    }
    console.log('dubai cookies per day',this.totalCookiesForTheDay);
  }
};

dubai.calcCustomersEachHour();
dubai.calcCookiesSoldEachHour();
dubai.sumCookiesPerDay();

// City four: Pairs
var paris = {
  name: 'paris',
  minCustomersEachHour: 20,
  maxCustomersEachHour: 38,
  averageCookiesSoldPerCustomer: 2.3,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  // function 1
  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<this.hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
    console.log ('paris customers per hour',this.customersEachHour);
  },

  //function 2
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
    console.log('paris cookies per hour',this.cookiesSoldEachHour);
  },

  //function 3 sum cookies per day.
  sumCookiesPerDay: function(){
    var totalCookiesForTheDay = 0;
    for(var i=0; i<this.cookiesSoldEachHour.length;i++) {
      totalCookiesForTheDay = this.cookiesSoldEachHour[i] + totalCookiesForTheDay;
    }
    console.log('paris cookies per day',this.totalCookiesForTheDay);
  }
};

paris.calcCustomersEachHour();
paris.calcCookiesSoldEachHour();
paris.sumCookiesPerDay();

// City five: Lima
var lima = {
  name: 'lima',
  minCustomersEachHour: 2,
  maxCustomersEachHour: 16,
  averageCookiesSoldPerCustomer: 4.6,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'],
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  // function 1
  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<this.hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
    console.log ('lima customers per hour',this.customersEachHour);
  },

  //function 2
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour;
    }
    console.log('lima cookies per hour',this.cookiesSoldEachHour);
  },

  //function 3 sum cookies per day.
  sumCookiesPerDay: function(){
    var totalCookiesForTheDay = 0;
    for(var i=0; i<this.cookiesSoldEachHour.length;i++) {
      totalCookiesForTheDay = this.cookiesSoldEachHour[i] + totalCookiesForTheDay;
    }
    console.log('lima cookies per day',this.totalCookiesForTheDay);
  }
};

lima.calcCustomersEachHour();
lima.calcCookiesSoldEachHour();
lima.sumCookiesPerDay();
