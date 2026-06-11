const express = require("express")
const { register, login, getProfile } = require("../controllers/auth.controller")
const { protect } = require("../middleware/auth.middleware")
const validate = require("../middleware/validate.middleware")
const { registerSchema, loginSchema } = require("../validations/auth.validation")

const router = express.Router()

router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)
router.get("/profile", protect, getProfile)

module.exports = router
