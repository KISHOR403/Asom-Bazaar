const sendMail = async ({ to, subject, html }) => {
  // Mocking email dispatch
  console.log(`[Email Dispatcher] Sending to: ${to} | Subject: ${subject}`)
  return { success: true }
}

module.exports = { sendMail }
