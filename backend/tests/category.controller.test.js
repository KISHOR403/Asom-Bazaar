const request = require('supertest');
const app = require('../src/app');

// Mock models and redis
jest.mock('../src/models', () => {
  return {
    Category: {
      findAll: jest.fn(),
      create: jest.fn(),
    },
    // Mock other models required in route initialization
    User: {},
    Seller: {},
    Product: {},
    Order: {},
    OrderItem: {},
    Cart: {},
    Address: {},
    Review: {},
    Transaction: {},
    Wishlist: {},
    sequelize: {
      transaction: jest.fn(() => ({
        commit: jest.fn(),
        rollback: jest.fn()
      }))
    }
  };
});

jest.mock('../src/config/redis', () => ({
  redisClient: {
    get: jest.fn(),
    setEx: jest.fn(),
    quit: jest.fn(),
  },
}));

jest.mock('../src/config/elasticsearch', () => ({
  esClient: {
    search: jest.fn(),
    index: jest.fn(),
  },
}));


const { Category } = require('../src/models');

describe('Category Endpoints', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/categories', () => {
    it('should return a list of categories', async () => {
      const mockCategories = [{ id: 1, name: 'Silk', slug: 'silk' }];
      Category.findAll.mockResolvedValue(mockCategories);

      const res = await request(app).get('/api/categories');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('categories');
      expect(res.body.categories).toEqual(mockCategories);
      expect(Category.findAll).toHaveBeenCalledTimes(1);
    });

    it('should handle errors', async () => {
      Category.findAll.mockRejectedValue(new Error('Database error'));

      const res = await request(app).get('/api/categories');

      expect(res.statusCode).toEqual(500); // Assuming standard error handler returns 500
    });
  });
});
