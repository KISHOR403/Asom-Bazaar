# Asom Bazar (asom-bazaar)

Asom Bazar is a specialized e-commerce platform dedicated to Assamese handloom, handicrafts, jewelry, and local organic products, bridging the gap between local artisans and global buyers.

## Repository Structure

```text
asom-bazaar/
├── frontend/             # Next.js 14 Web Application
├── backend/              # Node.js + Express API (Sequelize + PostgreSQL)
├── infrastructure/       # Docker, Nginx, and AWS configurations
├── docs/                 # Documentation (API specs, Database schemas)
└── package.json          # Root Monorepo configuration
```

## Getting Started

### Prerequisites
- Node.js (v18.x or later)
- PostgreSQL
- Redis
- Elasticsearch

### Installation
From the root directory, install all dependencies (for the root and both workspaces):
```bash
npm install
npm run install:all
```

### Running Locally
To run both the frontend and backend in development mode concurrently:
```bash
npm run dev
```

Or run them individually:
```bash
npm run dev:frontend  # Starts Next.js app
npm run dev:backend   # Starts Express backend
```
