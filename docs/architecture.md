# Asom Bazar - System Architecture

Asom Bazar is structured as a modern e-commerce monorepo separating a responsive customer/merchant client from a modular JSON API.

## Monorepo Layout

```
assam-bazar/
├── 📁 frontend/            # Next.js 14 Web Portal
│   ├── 📁 app/             # Next.js App Router layout
│   ├── 📁 components/      # UI components & form controls
│   └── 📁 store/           # Zustand client-state stores
│
├── 📁 backend/             # Express.js REST API
│   ├── 📁 src/
│   │   ├── 📁 config/      # Database & service clients
│   │   ├── 📁 controllers/ # HTTP controller handlers
│   │   ├── 📁 middleware/  # JWT & role authorization
│   │   └── 📁 models/      # Sequelize ORM schema entities
│   └── server.js           # Server listen entrypoint
│
└── 📁 nginx/               # Reverse proxy routing
```

## Technology Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS styling, Zustand state.
- **Backend**: Express.js API, PostgreSQL (via Sequelize ORM), Redis (caching), Elasticsearch (search index sync).
- **External Integrations**: Razorpay SDK (online checkouts), Shiprocket REST API (fulfillment logistics).
- **Deployment**: Docker Compose multi-container networks with Nginx reverse proxy.
