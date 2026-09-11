const request = require('supertest');
const app = require('../src/app');

// Mock any heavy database models or external services globally if needed,
// though app.js alone might not need mock if it doesn't instantly connect to DB
// on load, which seems to be the case (DB connection is in server.js)

describe('App Endpoints', () => {
  it('GET /health should return 200 UP', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status', 'UP');
    expect(res.body).toHaveProperty('timestamp');
  });

  it('GET /unknown-route should return 404', async () => {
    const res = await request(app).get('/unknown-route');
    expect(res.statusCode).toEqual(404);
  });
});
