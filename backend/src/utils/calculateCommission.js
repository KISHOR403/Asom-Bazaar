const calculateCommission = (price, rate = 10.0) => {
  const commission = Math.round(price * (rate / 100))
  const artisanPayout = price - commission
  return { commission, artisanPayout }
}

module.exports = calculateCommission
