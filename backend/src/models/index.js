const sequelize = require("../config/db")
const User = require("./User")
const Seller = require("./Seller")
const Product = require("./Product")
const Category = require("./Category")
const Order = require("./Order")
const OrderItem = require("./OrderItem")
const Review = require("./Review")
const Address = require("./Address")
const Cart = require("./Cart")
const Wishlist = require("./Wishlist")
const Transaction = require("./Transaction")

// User & Seller relations
User.hasOne(Seller, { foreignKey: "userId", onDelete: "CASCADE" })
Seller.belongsTo(User, { foreignKey: "userId" })

// User & Address relations
User.hasMany(Address, { foreignKey: "userId", onDelete: "CASCADE" })
Address.belongsTo(User, { foreignKey: "userId" })

// Seller & Product relations
Seller.hasMany(Product, { foreignKey: "sellerId", onDelete: "CASCADE" })
Product.belongsTo(Seller, { foreignKey: "sellerId" })

// Category & Product relations
Category.hasMany(Product, { foreignKey: "categoryId", onDelete: "RESTRICT" })
Product.belongsTo(Category, { foreignKey: "categoryId" })

// User & Order relations
User.hasMany(Order, { foreignKey: "userId", onDelete: "RESTRICT" })
Order.belongsTo(User, { foreignKey: "userId" })

// Order & Address relations
Address.hasMany(Order, { foreignKey: "addressId", onDelete: "RESTRICT" })
Order.belongsTo(Address, { foreignKey: "addressId" })

// Order & OrderItem relations
Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" })
OrderItem.belongsTo(Order, { foreignKey: "orderId" })

// Product & OrderItem relations
Product.hasMany(OrderItem, { foreignKey: "productId", onDelete: "RESTRICT" })
OrderItem.belongsTo(Product, { foreignKey: "productId" })

// Product & Review relations
Product.hasMany(Review, { foreignKey: "productId", onDelete: "CASCADE" })
Review.belongsTo(Product, { foreignKey: "productId" })

// User & Review relations
User.hasMany(Review, { foreignKey: "userId", onDelete: "CASCADE" })
Review.belongsTo(User, { foreignKey: "userId" })

// Order & Transaction relations
Order.hasOne(Transaction, { foreignKey: "orderId", onDelete: "CASCADE" })
Transaction.belongsTo(Order, { foreignKey: "orderId" })

// Cart relationships
User.hasMany(Cart, { foreignKey: "userId", onDelete: "CASCADE" })
Cart.belongsTo(User, { foreignKey: "userId" })
Product.hasMany(Cart, { foreignKey: "productId", onDelete: "CASCADE" })
Cart.belongsTo(Product, { foreignKey: "productId" })

// Wishlist relationships
User.hasMany(Wishlist, { foreignKey: "userId", onDelete: "CASCADE" })
Wishlist.belongsTo(User, { foreignKey: "userId" })
Product.hasMany(Wishlist, { foreignKey: "productId", onDelete: "CASCADE" })
Wishlist.belongsTo(Product, { foreignKey: "productId" })

module.exports = {
  sequelize,
  User,
  Seller,
  Product,
  Category,
  Order,
  OrderItem,
  Review,
  Address,
  Cart,
  Wishlist,
  Transaction
}
