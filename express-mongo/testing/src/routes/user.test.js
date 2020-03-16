const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');


describe('user', () => {
  beforeEach(async () => {
    for(let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  it('should signin an user', async done => {
    const password = await bcrypt.hash('12345', 8);
    const user = { email: 'simon@test.com', password };
    const dbUser = await mongoose.models.User.create(user);

    const res = await request(app)
      .post('/users/signin')
      .send({ email: 'simon@test.com', password: '12345' });
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
