const axios = require("axios")
require("dotenv").config()

// Shiprocket authentication helper
const getShiprocketToken = async () => {
  try {
    const res = await axios.post("https://apiv2.shiprocket.in/v1/external/auth/login", {
      email: process.env.SHIPROCKET_EMAIL,
      password: process.env.SHIPROCKET_PASSWORD
    })
    return res.data.token
  } catch (err) {
    console.error("Failed to authenticate with Shiprocket", err.message)
    return null
  }
}

module.exports = {
  getShiprocketToken,
  API_URL: "https://apiv2.shiprocket.in/v1/external"
}
