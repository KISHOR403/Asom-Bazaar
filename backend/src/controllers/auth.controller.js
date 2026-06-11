const bcrypt = require("bcryptjs")
const { User } = require("../models")
const generateToken = require("../utils/generateToken")

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body

    const userExists = await User.findOne({ where: { email } })
    if (userExists) {
      return res.status(400).json({ message: "User already exists" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    })

    return res.status(201).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: generateToken(user.id)
    })
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" })
    }

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      },
      token: generateToken(user.id)
    })
  } catch (err) {
    next(err)
  }
}

const getProfile = async (req, res, next) => {
  try {
    return res.status(200).json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
      role: req.user.role
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { register, login, getProfile }
