const jwt = require("jsonwebtoken")
require("dotenv").config()

const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET || "fallback_jwt_secret_12345",
    { expiresIn: "30d" }
  )
}

module.exports = generateToken
