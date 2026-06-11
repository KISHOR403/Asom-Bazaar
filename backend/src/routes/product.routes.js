const express = require("express")
const { getAllProducts, createProduct, searchProductsAPI } = require("../controllers/product.controller")
const { protect } = require("../middleware/auth.middleware")
const { authorize } = require("../middleware/role.middleware")
const validate = require("../middleware/validate.middleware")
const { createProductSchema } = require("../validations/product.validation")

const router = express.Router()

router.get("/search", searchProductsAPI)
router.get("/", getAllProducts)
router.post("/", protect, authorize("seller"), validate(createProductSchema), createProduct)

module.exports = router
