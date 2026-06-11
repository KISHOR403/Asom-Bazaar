const { Category } = require("../models")
const slugify = require("../utils/slugify")

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll()
    return res.status(200).json({ categories })
  } catch (err) {
    next(err)
  }
}

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body
    const slug = slugify(name)

    const category = await Category.create({ name, slug })
    return res.status(201).json({ category })
  } catch (err) {
    next(err)
  }
}

module.exports = { getCategories, createCategory }
