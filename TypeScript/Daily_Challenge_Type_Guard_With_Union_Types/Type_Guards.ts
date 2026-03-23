type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type Data = User | Product | Order;

function handleData(data: Data[]): string[] {
  return data.map((item) => {
    if (item.type === 'user') {
      return `Hello, ${item.name}! You are ${item.age} years old.`;
    } else if (item.type === 'product') {
      return `Product ID: ${item.id}, Price: $${item.price}.`;
    } else if (item.type === 'order') {
      return `Order ID: ${item.orderId}, Amount: $${item.amount}.`;
    } else {
      return 'Unexpected data type.';
    }
  });
}

// Example usage
const mixedData: Data[] = [
  { type: 'user', name: 'Alice', age: 25 },
  { type: 'product', id: 101, price: 49.99 },
  { type: 'order', orderId: 'ORD123', amount: 150 },
];

const results = handleData(mixedData);

results.forEach((result) => console.log(result));