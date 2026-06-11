const { DataTypes } = require("sequelize")
const sequelize = require("../config/db")

const Seller = sequelize.define("Seller", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  shopName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  clusterLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  experience: {
    type: DataTypes.STRING
  },
  bio: {
    type: DataTypes.TEXT
  },
  status: {
    type: DataTypes.ENUM("pending", "verified", "rejected"),
    defaultValue: "pending"
  }
})

module.exports = Seller
