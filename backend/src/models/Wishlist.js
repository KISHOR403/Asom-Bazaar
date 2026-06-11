const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Wishlist = sequelize.define("Wishlist", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false
  }
})

module.exports = Wishlist
