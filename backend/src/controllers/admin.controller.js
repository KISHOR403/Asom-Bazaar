const { Seller, Product } = require("../models")

const verifySeller = async (req, res, next) => {
  try {
    const { sellerId } = req.params
    const { status } = req.body // approved, rejected

    const seller = await Seller.findByPk(sellerId)
    if (!seller) {
      return res.status(404).json({ message: "Seller not found" })
    }

    seller.status = status === "approved" ? "verified" : "rejected"
    await seller.save()

    return res.status(200).json({
      message: `Seller status updated to ${seller.status}`,
      seller
    })
  } catch (err) {
    next(err)
  }
}

const approveProduct = async (req, res, next) => {
  try {
    const { productId } = req.params
    const { status } = req.body // approved, rejected

    const product = await Product.findByPk(productId)
    if (!product) {
      return res.status(404).json({ message: "Product not found" })
    }

    product.status = status
    await product.save()

    return res.status(200).json({
      message: `Product listing status updated to ${product.status}`,
      product
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { verifySeller, approveProduct }
