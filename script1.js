let productNames = [
  'Mirrors',
  'Antique desks',
  'Lazyboy Recliners',
  'TV Stands',
];
let stockLevels = [10, 5, 3, 4];
let itemPrice = [100, 65, 149, 120];
// let inventory = [
//   { name: 'Mirrors', stockLevel: 10, itemPrice: 100 },
//   { name: 'AntiqueDesks', stockLevels: 5, itemPrice: 65 },
//   { name: 'Lazyboy Recliners', stockLevels: 3, itemPrice: 149 },
//   { name: 'TV Stands', stockLevels: 4, itemPrice: 120 },
// ];

// function displayObjectItems() {
//   for (let i in inventory) {
//     let product = inventory[i];
//     console.log(product.name);
//     console.log(product);
//   }
// }

// displayObjectItems();

// displaying items

function displayItems() {
  for (let i = 0; i < productNames.length; i++) {
    console.log(
      `${
        productNames[i].charAt(0).toUpperCase() + productNames[i].slice(1)
      } - ${stockLevels[i]} in stock - $${itemPrice[i]}`
    );
  }
  console.log('-------------------------------------------');
}
displayItems();

// adding new items

function addNewItems(name, quantity, price) {
  productNames.push(name);
  stockLevels.push(quantity);
  itemPrice.push(price);
}

addNewItems('Dresser', 0, 125);

displayItems();

// Removing out of stock items

function removeOutOfStockItems() {
  for (let i = 0; i < productNames.length; i++) {
    if (stockLevels[i] == 0) {
      productNames.splice(i, 1);
      stockLevels.splice(i, 1);
      itemPrice.splice(i, 1);
      console.log(
        `${productNames[i]}- Stock ${stockLevels[i]} - Price: ${itemPrice[i]}`
      );
    }
  }
}

removeOutOfStockItems();
displayItems();

// finding by name

function findProductByName(name) {
  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i].includes(name)) {
      console.log(
        `Stock levels: ${stockLevels[i]}: Price: ${itemPrice[i]} it belongs in Antique Desks`
      );
    }
  }
}

findProductByName('desk');

// Applying discount

function applyDiscount() {
  for (let i = 0; i < productNames.length; i++) {
    itemPrice[i] = itemPrice[i] - itemPrice[i] * 0.1;
  }

  displayItems();
}

applyDiscount();

// Count stock

function countTotalStock() {
  for (let i = 0; i < stockLevels.length; i++) {
    console.log(`${productNames[i]} - ${stockLevels[i]} in stock}`);
  }
}

countTotalStock();

console.log(`${stockLevels} in stock}`);
console.log('-------------------------------------------');

// Process an order

function processOrder() {
  for (let i = 0; i < stockLevels.length; i++) {
    console.log(`${productNames[i]} - ${stockLevels[i]} in stock}`);
  }

  function calculateTotal(itemPrice, stockLevels) {
    return itemPrice * stockLevels;
  }
}

processOrder();
