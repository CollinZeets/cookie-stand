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
const times = [
  " ",
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
  "	Daily Location Total ",
];
// https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

let tbl = document.createElement("table");
let headerRow = document.createElement("tr");
let tblBody = document.createElement("tbody");

for (const i in times) {
  let theadCell = document.createElement("td");
  let theadCellText = document.createTextNode(`${times[i]}`);
  theadCell.appendChild(theadCellText);
  headerRow.appendChild(theadCell);
  tbl.appendChild(headerRow);
}
tbl.appendChild(headerRow);

for (const store in stores) {
  let row = document.createElement("tr");
  let storeCell = document.createElement("td");
  let storeCellText = document.createTextNode(`${store}`);
  storeCell.appendChild(storeCellText);
  row.appendChild(storeCell);

  for (let t = 0; t < stores[store].data.length; t++) {
    let cell = document.createElement("td");
    let cellText = document.createTextNode(`${stores[store].data[t]}`);
    cell.appendChild(cellText);
    row.appendChild(cell);
  }
  let totalCell = document.createElement("td");
  let cellTotal = document.createTextNode(`${stores[store].total}`);
  totalCell.appendChild(cellTotal);
  row.appendChild(totalCell);
  tbl.appendChild(row);
}

tbl.appendChild(tblBody);
tbl.setAttribute("border", "2");
document.getElementById("storeResults").appendChild(tbl);

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
