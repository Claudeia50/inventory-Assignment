let productNames = [
  "Mirrors",
  "Antique desks",
  "Lazyboy Recliners",
  "TV Stands",
];
let stockLevels = [10, 5, 3, 4];
let itemPrice = [100, 65, 149, 120];
let testArr = [1, 2, 3, 4];

function displayItems() {
  //3. Function never used
  for (let i = 0; i < productNames.length; i++) {
    console.log(
      // 1 - Correcting the template string below with bacticks
      `${
        productNames[i].charAt(0).toUpperCase() + productNames[i].slice(1)
      } - ${stockLevels[i]} in stock - $${itemPrice[i]}`
    );
  }
}

function addNewItems(name, quantity, price) {
  productNames.push(name);
  stockLevels.push(quantity);
  itemPrice.push(price);
}

addNewItems("Dresser", 10, 125);
//4 Needed to see if addNewItems worked so put displayItems below...
displayItems();

let removedElement = productNames.shift();

//5. I'm assuming that this is #4 "Removing Stock levels"
//5. You'll want to create a for loop and loop thorugh to see if anyone's stock levels are 0;
if ((stockLevels = 0)) {
  //2. correcting backticks
  productNames[i] = `${removedElement}`;
}

function findProductByName(productNames) {
  //this also needs a for loop to traverse each elenent in the array to see if it's name is what you check for
  const foundProduct = productNames.find(
    (product) => product.name === productNames
  );
  return foundProduct || "stockLevels";
}

if ("foundProduct") {
  //2. correcting backticks
  console.log("Product Found") + `${stockLevels}`;
} else {
  console.log(`Product "${productNameToSearch}" Product not found.`);
}

function applyDiscount(productNames, discountPercentage) {
  //5 I'd
  if (discountPercentage < 0 || discountPercentage > 10) {
    throw new Error();
  }

  let discountedInventory = productNames.map((item) => {
    let discountedPrice = item.price * (1 - "discountPercentage / 10");
    return { ...item, price: discountedPrice };
  });

  return discountedInventory;
}

let idiscountedInventory = [
  { name: "Mirrors", price: 100 },
  { name: "AntiqueDesks", price: 65 },
  { name: "LazyboyRecliners", price: 149 },
  { name: "TVStands", price: 120 },
];

let discountPercentage = 10;
let discountedInventory = applyDiscount(productNames, discountPercentage);

console.log(discountedInventory);

function countStockLevels(inventory) {
  let totlaItems = 0;
  for (const item in productNames) {
    if (productNames.hasOwnProperty(item)) {
      totlaItems += inventory[item];
    }
  }

  return totalItems;
}

const inventory = {
  mirrors: 10,
  antiqueDesks: 5,
  lazyboyRecliners: 3,
  tvStands: 4,
};

function displayStockLevels(total) {
  const stockLevelDisplay = document.getElementById("stockLevelDisplay");
  if (stockLevelDisplay) {
    stockLevelDisplay.textContent = "Total inventory: " + total;
  } else {
    const newProductNamesDisplay = document.createElement("p");
    newProductNamesDisplay.id = "inventory-display";
    newStockLevelsDisplay.textContent = "Total inventory : " + total;
    document.body.appendChild(newProductNamesDisplay);
  }
}

console.log((displayProductNames = "totalInventory"));
