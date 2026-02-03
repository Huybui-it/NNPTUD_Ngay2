// Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}

// Dữ liệu sản phẩm
const products = [
  new Product(1, "iPhone 14 Pro", 28000000, 5, "Smartphone", true),
  new Product(2, "Samsung Galaxy S23", 22000000, 0, "Smartphone", true),
  new Product(3, "AirPods Pro 2", 6500000, 12, "Accessories", true),
  new Product(4, "MacBook Air M2", 32000000, 3, "Laptop", true),
  new Product(5, "Tai nghe Sony WH-1000XM5", 9500000, 8, "Accessories", false),
  new Product(6, "Xiaomi 13T Pro", 14500000, 7, "Smartphone", true),
  new Product(7, "Ốp lưng iPhone", 450000, 25, "Accessories", true),
];

// =============================================
// Câu 1: Khai báo constructor function Product
// (đã khai báo ở trên)

// Câu 2: Khởi tạo mảng products
// (đã khởi tạo ở trên)

// Câu 3: Tạo mảng mới chỉ chứa name và price
const nameAndPrice = products.map((p) => ({ name: p.name, price: p.price }));

console.log("Câu 3 :", nameAndPrice);

// Câu 4: Lọc sản phẩm còn hàng (quantity > 0)
const inStock = products.filter((p) => p.quantity > 0);

console.log("Câu 4 :", inStock);

// Câu 5: Có ít nhất một sản phẩm giá > 30.000.000 không
const hasExpensive = products.some((p) => p.price > 30000000);

console.log("Câu 5 :", hasExpensive);

// Câu 6: Tất cả sản phẩm Accessories có đang bán không
const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);

console.log("Câu 6 :", allAccessoriesAvailable);

// Câu 7: Tổng giá trị kho hàng
const totalValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

console.log("Câu 7 :", totalValue.toLocaleString() + " VNĐ");

// Câu 8: Duyệt for...of in: Tên - Danh mục - Trạng thái
console.log("Câu 8 :");
for (const p of products) {
  const status = p.isAvailable ? "Đang bán" : "Ngừng bán";
  console.log(`${p.name} - ${p.category} - ${status}`);
}

// Câu 9: Dùng for...in in thuộc tính và giá trị (sản phẩm đầu tiên)
console.log("Câu 9 :");
const first = products[0];
for (const key in first) {
  console.log(`${key}: ${first[key]}`);
}

// Câu 10: Danh sách tên sản phẩm đang bán VÀ còn hàng
const availableInStockNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

console.log("Câu 10 :", availableInStockNames);
