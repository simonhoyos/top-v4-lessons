const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('./app');


describe('app', () => {
  beforeEach(async () => {
    for(let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should GET / with success code', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
  });
});
