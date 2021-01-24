"use strict";

class Store {
  constructor(minCust, maxCust, avgSale) {
    this.data = new Array(13);
    this.total = 0;

    for (let i = 0; i < this.data.length; i++) {
      this.data[i] = Math.round(
        (Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust) *
          avgSale
      );
      this.total += this.data[i];
    }
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

for (const store in stores) {
  document
    .getElementById("storeResults")
    .appendChild(makeUL(store, stores[store]));
}

function makeUL(name, store) {
  // https://stackoverflow.com/questions/11128700/create-a-ul-and-fill-it-based-on-a-passed-array
  // Create the list element:
  let list = document.createElement("ul");
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(name));
  console.log(store.data);
  for (let i = 0; i < store.data.length; i++) {
    // Create the list item:
    let item = document.createElement("li");
    let time = [
      "6am",
      "7am",
      "8am",
      "9am",
      "10am",
      "11am",
      "12pm",
      "1pm",
      "2pm",
      "3pm",
      "4pm",
      "5pm",
      "6pm",
    ];
    // Set its contents:
    item.appendChild(
      document.createTextNode(`${time[i]}; ${store.data[i]} cookies sold `)
    );

    // Add it to the list:
    list.appendChild(item);
  }
  let total = document.createElement("li");
  total.appendChild(document.createTextNode(`total: ${store.total} `));
  list.appendChild(total);
  div.appendChild(list);
  // Finally, return the constructed list:
  return div;
}
/*
Location	Min / Cust	Max / Cust	Avg Cookie / Sale
Seattle	23	65	6.3
Tokyo	3	24	1.2
Dubai	11	38	3.7
Paris	20	38	2.3
Lima	2	16	4.6
*/
