function handleData(data) {
    return data.map(function (item) {
        if (item.type === 'user') {
            return "Hello, ".concat(item.name, "! You are ").concat(item.age, " years old.");
        }
        else if (item.type === 'product') {
            return "Product ID: ".concat(item.id, ", Price: $").concat(item.price, ".");
        }
        else if (item.type === 'order') {
            return "Order ID: ".concat(item.orderId, ", Amount: $").concat(item.amount, ".");
        }
        else {
            return 'Unexpected data type.';
        }
    });
}
// Example usage
var mixedData = [
    { type: 'user', name: 'Alice', age: 25 },
    { type: 'product', id: 101, price: 49.99 },
    { type: 'order', orderId: 'ORD123', amount: 150 },
];
var results = handleData(mixedData);
results.forEach(function (result) { return console.log(result); });
