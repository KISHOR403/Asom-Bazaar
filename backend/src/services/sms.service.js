const sendSMS = async ({ to, message }) => {
  console.log(`[SMS Dispatcher] Sending to: ${to} | Message: ${message}`)
  return { success: true }
}

module.exports = { sendSMS }
