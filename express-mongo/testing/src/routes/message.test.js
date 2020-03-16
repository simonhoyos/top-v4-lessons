const request = require('supertest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = require('../app');


describe('message', () => {
  beforeEach(async () => {
    for(let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  it('should GET /messages with success code', async done => {
    const message = await mongoose.models.Message.create({ sender: 'Simon', body: 'hola' });
    const user = { email: 'simon@test.com', password: '12345' }
    const auth = await request(app).post('/users/signup').send(user);
    const token = auth.body.token;
    const response = await request(app)
      .get('/messages/')
      .set('Authorization', token);
    done();

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0].sender).toBe(message.sender);
    expect(response.body[0].body).toBe(message.body);
  });

  it('shouldn\'t GET /messages without authentication', async done => {
    const message = await mongoose.models.Message.create({ sender: 'Simon', body: 'hola' });
    const user = { email: 'simon@test.com', password: '12345' }
    const response = await request(app)
      .get('/messages/');
    done();

    expect(response.statusCode).toBe(401);
    expect(response.body.message).toMatch('your session has expired')
  });

  // it('should create a new message', async done => {
  //   const message = { sender: 'Simon', body: 'hola' };

  //   const response = await request(app).post('/messages/').send(message);
  //   done();

  //   expect(response.statusCode).toBe(200);
  //   expect(response.body.sender).toBe(message.sender);
  //   expect(response.body.body).toBe(message.body);
  // });

  // it('shouldn\'t create a new message', async done => {
  //   const message = { body: 'hola' };

  //   const response = await request(app).post('/messages/').send(message);
  //   done();

  //   expect(response.statusCode).toBe(400);
  //   expect(response.body).toHaveProperty('error');
  //   expect(response.body.error.errors.sender.message).toMatch('required');
  // });

  // it('should update an existing message', async done => {
  //   const message = await mongoose.models.Message.create({ sender: 'Simon', body: 'hola' });
  //   const updatedMessage = { sender: 'Maria' }

  //   const res = await request(app).put(`/messages/${message._id}`).send(updatedMessage);
  //   done();

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.sender).toBe(updatedMessage.sender);
  //   expect(res.body.body).toBe(message.body);
  // });

  // it('should delete an existing message', async done => {
  //   const message = await mongoose.models.Message.create({ sender: 'Simon', body: 'hola' });

  //   const res = await request(app).delete(`/messages/${message._id}`);
  //   done();

  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.sender).toBe(message.sender);
  //   expect(res.body.body).toBe(message.body);
  // });
});
