const jwt = require("jsonwebtoken")
const { User } = require("../models")
require("dotenv").config()

const protect = async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "fallback_jwt_secret_12345")

      req.user = await User.findByPk(decoded.id)
      if (!req.user) {
        return res.status(401).json({ message: "User no longer exists" })
      }
      return next()
    } catch (err) {
      console.error(err)
      return res.status(401).json({ message: "Not authorized, token invalid" })
    }
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token provided" })
  }
}

module.exports = { protect }
