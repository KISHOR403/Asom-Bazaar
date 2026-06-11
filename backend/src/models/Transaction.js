const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Transaction = sequelize.define("Transaction", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  orderId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  razorpayPaymentId: {
    type: DataTypes.STRING
  },
  razorpayOrderId: {
    type: DataTypes.STRING
  },
  razorpaySignature: {
    type: DataTypes.STRING
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM("pending", "success", "failed"),
    defaultValue: "pending"
  }
})

module.exports = Transaction
