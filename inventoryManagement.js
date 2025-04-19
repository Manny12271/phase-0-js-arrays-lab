let products = ["Laptop", "Phone", "Headphones", "Monitor"];

function logFirstProduct() {
    console.log(products[0]);
}

function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }
}

function removeLastProduct() {
    products.pop();
}

function addProduct(productName) {
    products.push(productName);
}

module.exports = {
    products,
    logFirstProduct,
    updateProductName,
    removeLastProduct,
    addProduct
};

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
