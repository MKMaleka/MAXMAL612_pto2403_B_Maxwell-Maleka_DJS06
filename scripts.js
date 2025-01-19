// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// Execises
// 1. ForEach Basics - ForEach method: It goes through each item in the array, one by one.
provinces.forEach(province => {
  console.log(province)});
names.forEach(name => {
  console.log(name)});
names.forEach((name, index) => {    //index helps to get the matching province for each name
  console.log(`${name} (${provinces[index]})`)}); //The use of template literals to create the string in the required format

// 2. Uppercase Transformation - .map() method returns a new array with the transformed values.
provinces.map(province => {
  console.log(province.toUpperCase())}); //used a string method that converts text to uppercase

// 3. Name Lengths - Tells us the number of characters in a string
names.map(name => {
  console.log(name.length)});

// 4. Sorting
const Provinces = [...provinces].sort(); // Used spread operator to avoid changing the original array
console.log(Provinces);

// 5. Filtering Cape
const nonCapeProvinces = provinces.filter(province => !province.includes("Cape"));
console.log(nonCapeProvinces.length); //count of remaining provinces

// 6. Finding 'S'
const containsS = names.map(name => name.includes('S'));
console.log(containsS);
 
// 7. Creating Object Mapping - Reduce method takes an array and "reduces" it into a single value called an object.
const ObjectMapping = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {}); // {} initial value for acc - an empty obect to start building the result
console.log(ObjectMapping);

// Advanced Exercises
// 1. log Products
console.log(products.map(product => product.product));

// 2. Filter
console.log(products.filter(product => product.product.length <= 5));

// 3. Price Manipulation
console.log(products
  .filter(product => product.price && !isNaN(product.price)) // Filters valid prices
  .map(product => ({ ...product, price: Number(product.price) })) // Converts string prices to numbers
  .reduce((total, product) => total + product.price, 0));

// 4. Concentenate Product Names
console.log(products.reduce((acc, product) => `${acc}${product.product}, `, '').slice(0, -2)); //  removes the last 2 characters

// 5. Find Extremes in Prices
const ExtremesPrices = products
  .filter(product => product.price && !isNaN(product.price))
  .map(product => ({ product: product.product, price: Number(product.price) }));
const highest = ExtremesPrices.reduce((max, product) => (product.price > max.price ? product : max));
const lowest = ExtremesPrices.reduce((min, product) => (product.price < min.price ? product : min));
console.log(`Highest: ${highest.product}. Lowest: ${lowest.product}.`);

// 6. Object Transformation - Creates a new array of objects where the product key is renamed to name and price to cost
console.log(products.reduce((acc, product) => {
  acc.push({ name: product.product, cost: product.price }); //acc.push adds a new object to the acc array
  return acc;
}, []));




