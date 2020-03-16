const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./app');

describe('app', () => {
  beforeEach(async () => {
    for(let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });
  // it('should GET / with success code', async () => {
  //   const response = await request(app).get('/');

  //   expect(response.statusCode).toBe(200);
  // });

  it('should GET /messages with success code', async done => {
    const message = await mongoose.models.Message.create({ sender: 'Simon', body: 'hola' });
    const response = await request(app).get('/messages/');
    done();

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].sender).toBe(message.sender);
    expect(response.body[0].body).toBe(message.body);
  });

  it('should create a new message', async done => {
    const message = { sender: 'Simon', body: 'hola' };

    const response = await request(app).post('/messages/').send(message);
    done();

    expect(response.statusCode).toBe(200);
    expect(response.body.sender).toBe(message.sender);
    expect(response.body.body).toBe(message.body);
  })
})
