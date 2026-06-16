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
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  crafts: {
    type: DataTypes.JSON,
    allowNull: true
  },
  aadhaarNumber: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bankAccount: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ifscCode: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM("pending", "verified", "rejected"),
    defaultValue: "pending"
  }
})

module.exports = Seller
