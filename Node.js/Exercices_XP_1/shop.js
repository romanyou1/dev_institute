const products = require("./products");

// Function to search for a product by name
function findProduct(productName) {
  const product = products.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  if (product) {
    console.log("Product Found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
    console.log("-----------------------");
  } else {
    console.log(`Product "${productName}" not found.`);
    console.log("-----------------------");
  }
}

// Test the function
findProduct("Laptop");
findProduct("Book");
findProduct("Phone"); // does not exist