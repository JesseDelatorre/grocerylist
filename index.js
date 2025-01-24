const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];



//logNames
groceryList.forEach((itemName) => {
  //console.log(itemName.name);
});


//getUpperCaseNames
groceryList.map((itemCaps) => {

  console.log(itemCaps.name.toUpperCase());
});



//getItemByld 
const getItemById = (items, id) => {
  const newList = items.find((item) => {
    return (item.id === id);
  });
  //console.log(newList);
}
getItemById(groceryList, 6);


//console.log(newList);


//getItemPriceByName
//loop
const getItemByPrice = (items, price) => {
  items.find((itemName) => {
    for (i = 0; i < items.length; i++) {
      const currentItem = items[i];
      if (currentItem === price) {
        return true;
      }
      console.log();
    }
    return false;

  }
  )
};
getItemByPrice(groceryList, .25);



//getItemsByCategory
//.filter
const getItemsByCategory = ((category) => {
  return category[0] === `category`;
});
const filteredItems = groceryList.filter(getItemsByCategory);
console.log(filteredItems);
//countItems
//.reduce
//calculateTotalPrice
//.reduce


