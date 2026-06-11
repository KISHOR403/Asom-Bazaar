const rateLimits = new Map()

const rateLimiter = (limit = 100, windowMs = 15 * 60 * 1000) => {
  return (req, res, next) => {
    const ip = req.ip
    const now = Date.now()

    if (!rateLimits.has(ip)) {
      rateLimits.set(ip, { count: 1, resetTime: now + windowMs })
      return next()
    }

    const record = rateLimits.get(ip)

    if (now > record.resetTime) {
      record.count = 1
      record.resetTime = now + windowMs
      return next()
    }

    record.count += 1
    if (record.count > limit) {
      return res.status(429).json({
        message: "Too many requests, please try again later."
      })
    }

    next()
  }
}

module.exports = { rateLimiter }
