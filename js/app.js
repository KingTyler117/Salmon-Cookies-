'use stict';

var seattle = {
  name: 'seattle',
  min:    23,
  max:    65,
  averageSales:   6.3,
  openHours: ['6AM', '7AM', '8AM', '9AM','10AM','11AM','12PM', '1PM', '2PM',
    '3PM', '4PM', '5PM', '6PM', '7PM'],
  customerPerhour: [],
  cookiesPerhour: [],
  sales: [],
  customerCounter: function() {
    for ( var i = 0; i<this.openHours.length; i++){
      var randomCust = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      this.customerPerhour.push(randomCust);
    }
    console.log ('seattle;customer per hour',this.customerPerhour);

  }
};
//   salesSim: function() {
//     for ( var i = 0; i< this.openHours.length; i++){
//       var product = Math.round(this.averageSales * this.customerCounter());
//       this.sales.push(product);
//     }
//     return seattle.sales;
//   }


//   render: function(){
//     var SalesOne = document.getElementById('sales-data');
//     var listItem = document.createElement('li');
//     listItem.textContent = this.sale;
//     SalesOne.appendChild(listItem);

//   }
// }
// console.log(salesSim

seattle.customerCounter();