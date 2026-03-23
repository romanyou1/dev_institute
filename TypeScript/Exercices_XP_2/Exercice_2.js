var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Product.prototype.getProductInfo = function () {
        return "Product: ".concat(this.name, ", Price: $").concat(this.price);
    };
    return Product;
}());
var product = new Product(1, "Laptop", 1200);
console.log(product.getProductInfo());
// This will cause a TypeScript error:
// product.id = 2;
