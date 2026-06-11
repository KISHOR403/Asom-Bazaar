const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  orderId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = OrderItem
