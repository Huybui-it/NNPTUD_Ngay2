// Câu 1:
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Câu 2:
const products = [
  new Product(1, "iPhone 14 Pro", 28000000, 5, "Smartphone", true),
  new Product(2, "Samsung Galaxy S23", 22000000, 0, "Smartphone", true),
  new Product(3, "AirPods Pro 2", 6500000, 12, "Accessories", true),
  new Product(4, "MacBook Air M2", 32000000, 3, "Laptop", true),
  new Product(5, "Tai nghe Sony WH-1000XM5", 9500000, 8, "Accessories", false),
  new Product(6, "Xiaomi 13T Pro", 14500000, 7, "Smartphone", true),
  new Product(7, "Ốp lưng iPhone", 450000, 25, "Accessories", true),
];

//
const nameAndPrice = products.map((product) => ({
  name: product.name,
  price: product.price,
}));

console.log("Câu 3 :");
console.log(nameAndPrice);
console.log("--------------------------------------------------");

// Câu 4:
const inStock = products.filter((product) => product.quantity > 0);

console.log("Câu 4 :");
console.table(inStock);
console.log("--------------------------------------------------");

// Câu 5:
const hasExpensiveProduct = products.some(
  (product) => product.price > 30000000,
);

console.log("Câu 5 :", hasExpensiveProduct);
console.log("--------------------------------------------------");

// Câu 6:
const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);

console.log("Câu 6 :", allAccessoriesAvailable);
console.log("--------------------------------------------------");

// Câu 7:
const totalInventoryValue = products.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log("Câu 7 :", totalInventoryValue.toLocaleString() + " VNĐ");
console.log("--------------------------------------------------");

// Câu 8:
console.log("Câu 8 :");
for (const product of products) {
  const status = product.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log("--------------------------------------------------");

// Câu 9:
console.log("Câu 9 :");
const firstProduct = products[0];

for (const key in firstProduct) {
  console.log(`${key}: ${firstProduct[key]}`);
}
console.log("--------------------------------------------------");

// Câu 10: Lấy danh sách tên các sản phẩm đang bán VÀ còn hàng
const availableAndInStockNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

console.log("Câu 10 :");
console.log(availableAndInStockNames);
