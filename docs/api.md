# Asom Bazar - API Reference

Base Endpoint URL: `http://localhost:5000/api`

## Authentication

### `POST /auth/register`
Creates a new customer or merchant.
- Body: `name`, `email`, `password`, `role` ("buyer" | "seller")

### `POST /auth/login`
Generates a JWT bearer session token.
- Body: `email`, `password`

### `GET /auth/profile` (Protected)
Retrieves the logged-in user profile attributes.

---

## Products Catalog

### `GET /products`
Retrieves products approved for listing.
- Query Parameters: `category`, `minPrice`, `maxPrice`

### `POST /products` (Protected, Merchant Only)
Submits a new handcrafted item for administrative review.

---

## Orders & Payments

### `POST /orders` (Protected)
Creates a checkout order record.
- Body: `addressId`, `paymentMethod` ("razorpay" | "cod"), `items`

### `POST /payments/verify` (Protected)
Validates Razorpay payment signature and updates order status.

---

## Administration

### `PUT /admin/sellers/:sellerId/verify` (Protected, Admin Only)
Updates a merchant portfolio verification status.

### `PUT /admin/products/:productId/approve` (Protected, Admin Only)
Approves or rejects a product catalog entry.
