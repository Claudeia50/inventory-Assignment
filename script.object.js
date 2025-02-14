let inventory = [
  { itemName: 'Mirrors', stockLevel: 10, itemPrice: 100 },
  { itemName: 'AntiqueDesks', stockLevel: 6, itemPrice: 65 },
  { itemName: 'Lazyboy Recliners', stockLevel: 3, itemPrice: 149 },
  { itemName: 'TV Stands', stockLevel: 4, itemPrice: 120 },
];

// displaying items

function displayObjectItems() {
  for (let i in inventory) {
    let product = inventory[i];
    console.log(product.itemName);
    console.log(product);
  }
  console.log('-------------------------------------------');
}
displayObjectItems();

// adding new items

function addItem(itemName, stockLevel, itemPrice) {
  inventory.push({
    itemName,
    stockLevel,
    itemPrice,
  });
  console.log(`Added ${itemName} ${stockLevel} ${itemPrice}(s) to inventory.`);
}

addItem('Dresser', 5, 125);

displayObjectItems();

// Remove out of stock items

function removeOutOfStockItems() {
  for (let itemName in inventory) {
    let product = inventory[itemName];
    if (inventory[itemName].stockLevel === 0) {
      delete inventory[itemName];
    }
    console.log(`Removed ${itemName} from inventory.`);
  }
}
removeOutOfStockItems();

displayObjectItems();

// Find product by name

function findItemByName(inventory, itemName) {
  for (const key in inventory) {
    if (inventory.hasOwnProperty(key)) {
      if (inventory[key].name === itemName) {
        return inventory[key];
      }
    }
  }
  return undefined;
}

const itemName = 'cabinet';
const foundItem = findItemByName(inventory, itemName);

if (foundItem) {
  console.log(`Found item: ${foundItem.name}`);
} else {
  console.log(`Item "${itemName}" not found in inventory.`);
}

findItemByName();
console.log('----------------------------------');

// Apply Discount

function applyDiscount() {
  for (let i = 0; i < itemName.length; i++) {
    inventory[i] = inventory[i] - 'itemPrice' * 0.1;
  }

  displayObjectItems();
}

applyDiscount();
