const { Seller, Product } = require("../models")

const registerSeller = async (req, res, next) => {
  try {
    const { shopName, clusterLocation, experience, bio } = req.body

    const existingSeller = await Seller.findOne({ where: { userId: req.user.id } })
    if (existingSeller) {
      return res.status(400).json({ message: "Seller account already registered" })
    }

    const seller = await Seller.create({
      userId: req.user.id,
      shopName,
      clusterLocation,
      experience,
      bio
    })

    return res.status(201).json({
      message: "Seller registered successfully. Awaiting verification.",
      seller
    })
  } catch (err) {
    next(err)
  }
}

const getSellerProducts = async (req, res, next) => {
  try {
    const seller = await Seller.findOne({ where: { userId: req.user.id } })
    if (!seller) {
      return res.status(404).json({ message: "Seller profile not found" })
    }

    const products = await Product.findAll({ where: { sellerId: seller.id } })
    return res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
}

module.exports = { registerSeller, getSellerProducts }
