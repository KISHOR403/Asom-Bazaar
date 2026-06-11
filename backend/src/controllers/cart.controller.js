const { Cart, Product } = require("../models")

const getCart = async (req, res, next) => {
  try {
    const items = await Cart.findAll({
      where: { userId: req.user.id },
      include: [{ model: Product }]
    })
    return res.status(200).json({ items })
  } catch (err) {
    next(err)
  }
}

const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body

    const existing = await Cart.findOne({
      where: { userId: req.user.id, productId }
    })

    if (existing) {
      existing.quantity += quantity || 1
      await existing.save()
      return res.status(200).json({ item: existing })
    }

    const item = await Cart.create({
      userId: req.user.id,
      productId,
      quantity: quantity || 1
    })

    return res.status(201).json({ item })
  } catch (err) {
    next(err)
  }
}

const updateCart = async (req, res, next) => {
  try {
    const { productId } = req.params
    const { quantity } = req.body

    const item = await Cart.findOne({
      where: { userId: req.user.id, productId }
    })

    if (!item) {
      return res.status(404).json({ message: "Cart item not found" })
    }

    if (quantity <= 0) {
      await item.destroy()
      return res.status(200).json({ message: "Item removed from cart" })
    }

    item.quantity = quantity
    await item.save()

    return res.status(200).json({ item })
  } catch (err) {
    next(err)
  }
}

module.exports = { getCart, addToCart, updateCart }
