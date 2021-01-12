"use strict";

class Store {
  constructor(minCust, maxCust, avgSale) {
    this.data = new Array(13);
    this.total = 0;
    this.data.forEach((element) => {
      element =
        (Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust) *
        avgSale;
      this.total += element;
    });
    this.average = this.total / this.data.length;
  }
}

let stores = {
  seattle: new Store(23, 65, 6.3),
  tokyo: new Store(3, 24, 1.2),
  dubai: new Store(11, 38, 3.7),
  paris: new Store(20, 38, 2.3),
  lima: new Store(2, 16, 4.6),
};

/*
Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
*/
