export function loadRazorpayScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script")
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    script.onload = () => {
      resolve(true)
    }
    script.onerror = () => {
      resolve(false)
    }
    document.body.appendChild(script)
  })
}

export async function openRazorpayCheckout({ orderId, amount, currency = "INR", name = "Asom Bazar", description = "Purchase from Artisans", email = "", phone = "", onSuccess, onFailure }) {
  const isLoaded = await loadRazorpayScript()
  
  if (!isLoaded) {
    alert("Failed to load Razorpay SDK. Check your internet connection.")
    onFailure?.(new Error("Razorpay SDK failed to load"))
    return
  }

  const options = {
    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "rzp_test_placeholder",
    amount: amount.toString(),
    currency: currency,
    name: name,
    description: description,
    order_id: orderId,
    handler: function (response) {
      onSuccess?.({
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature
      })
    },
    prefill: {
      email: email,
      contact: phone
    },
    theme: {
      color: "#f97316" // primary theme color (orange)
    }
  }

  const paymentObject = new window.Razorpay(options)
  paymentObject.open()
}
