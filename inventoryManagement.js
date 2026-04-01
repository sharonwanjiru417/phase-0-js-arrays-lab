const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Add a new product
function addProduct(productName) {
  products.push(productName);
}

function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  }
}

function removeLastProduct() {
  if (products.length > 0) {
    products.pop();
  }
}

module.exports = {
  products,
  logFirstProduct,
  addProduct,
  updateProductName,
  removeLastProduct
};