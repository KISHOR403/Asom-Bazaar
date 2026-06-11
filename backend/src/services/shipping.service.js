const axios = require("axios")
const { API_URL, getShiprocketToken } = require("../config/shiprocket")

const createShipmentOrder = async (orderDetails) => {
  try {
    const token = await getShiprocketToken()
    if (!token) throw new Error("Could not authenticate with Shiprocket")

    const res = await axios.post(
      `${API_URL}/orders/create/adhoc`,
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res.data
  } catch (err) {
    console.error("Shiprocket shipment placement error:", err.message)
    throw err
  }
}

module.exports = { createShipmentOrder }
