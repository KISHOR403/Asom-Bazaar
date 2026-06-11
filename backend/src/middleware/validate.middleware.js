const validate = (schema, type = "body") => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req[type], {
      abortEarly: false,
      stripUnknown: true
    })

    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message
      }))
      return res.status(400).json({ message: "Validation errors", errors })
    }

    req[type] = value
    next()
  }
}

module.exports = validate
