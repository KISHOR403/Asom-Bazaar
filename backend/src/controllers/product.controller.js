const { Product, Category, Seller } = require("../models")
const { searchProducts, indexProduct } = require("../services/search.service")

const getAllProducts = async (req, res, next) => {
  try {
    const { category, minPrice, maxPrice, status } = req.query
    const filter = { status: status || "approved" }

    if (category) {
      const cat = await Category.findOne({ where: { slug: category } })
      if (cat) filter.categoryId = cat.id
    }

    const products = await Product.findAll({
      where: filter,
      include: [{ model: Seller, attributes: ["shopName", "clusterLocation"] }]
    })

    return res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
}

const searchProductsAPI = async (req, res, next) => {
  try {
    const result = await searchProducts(req.query)
    return res.status(200).json(result)
  } catch (err) {
    next(err)
  }
}

const createProduct = async (req, res, next) => {
  try {
    const { title, description, price, stock, categoryId, images } = req.body

    const seller = await Seller.findOne({ where: { userId: req.user.id } })
    if (!seller || seller.status !== "verified") {
      return res.status(403).json({ message: "Only verified sellers can create products" })
    }

    const product = await Product.create({
      sellerId: seller.id,
      categoryId,
      title,
      description,
      price,
      stock,
      images
    })

    // Fetch product with category to get the slug for indexing
    const fullProduct = await Product.findByPk(product.id, {
      include: [Category]
    })
    
    // Index it in Elasticsearch (even if pending, we can filter by status in search)
    await indexProduct(fullProduct)

    return res.status(201).json({
      message: "Product created successfully. Pending approval.",
      product
    })
  } catch (err) {
    next(err)
  }
}

module.exports = { getAllProducts, searchProductsAPI, createProduct }
