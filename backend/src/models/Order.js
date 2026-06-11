const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  addressId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  totalAmount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentMethod: {
    type: DataTypes.ENUM("razorpay", "cod"),
    defaultValue: "razorpay"
  },
  paymentStatus: {
    type: DataTypes.ENUM("pending", "paid", "failed"),
    defaultValue: "pending"
  },
  shippingStatus: {
    type: DataTypes.ENUM("pending", "processing", "shipped", "delivered", "cancelled"),
    defaultValue: "pending"
  },
  shiprocketOrderId: {
    type: DataTypes.STRING
  }
})

module.exports = Order
