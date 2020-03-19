const req = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');

const plate = {
  ingredients: ["arepa", "mantequilla", "sal", "quesito"],
  description: "Delicioso desayuno",
};

const userData = {
  username: 'simonhoyos',
  name: 'Simon',
  lastname: 'Hoyos',
  password: '12345',
  type: 'ADMIN'
};

describe('plates', () => {
  let token;
  beforeAll(async () => {
    // const user = await mongoose.models.User.create(userData);
    // const { username, password } = userData;
    // req(app).post('/signin').send({ username, password });

    const res = await req(app).post('/admins/signup').send(userData);
    token = res.body.token;
  });

  beforeEach(async () => {
    for(let collection in mongoose.connection.collections) {
      await mongoose.connection.collections[collection].deleteMany({});
    }
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should list all the plates', async done => {
    await mongoose.models.Plate.create(plate);
    const res = await req(app).get('/plates').set('Authorization', token);
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].ingredients).toMatchObject(plate.ingredients);
    expect(res.body[0].description).toBe(plate.description);
  });

  it('should send if not authenticated', async done => {
    await mongoose.models.Plate.create(plate);
    const res = await req(app).get('/plates');
    done();

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty('error');
  });

  it('should find a plate', async done => {
    const newPlate = await mongoose.models.Plate.create(plate);
    const res = await req(app).get(`/plates/${newPlate._id}`).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body.ingredients).toMatchObject(plate.ingredients);
    expect(res.body.description).toBe(plate.description);
  });

  it('should send error if invalid id when finding a plate', async done => {
    const res = await req(app).get('/plates/12345').set('Authorization', token);
    done();

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should create a new plate', async done => {
    const res = await req(app).post('/plates').send(plate).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body.ingredients).toMatchObject(plate.ingredients);
    expect(res.body.description).toBe(plate.description);
  });

  it('should send error if invalid data when creating a plate', async done => {
    const res = await req(app).post('/plates').send({}).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should update a plate', async done => {
    const description = 'Delicioso desayuno Colombiano';
    const newPlate = await mongoose.models.Plate.create(plate);
    const res = await req(app).put(`/plates/${newPlate._id}`).send({ description }).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body.ingredients).toMatchObject(plate.ingredients);
    expect(res.body.description).toBe(description);
  });

  it('should send error if invalid id when updating a plate', async done => {
    const res = await req(app).put('/plates/12345').send({}).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should delete a plate', async done => {
    const newPlate = await mongoose.models.Plate.create(plate);
    const res = await req(app).delete(`/plates/${newPlate._id}`).set('Authorization', token);
    done();

    expect(res.statusCode).toBe(200);
    expect(res.body.ingredients).toMatchObject(plate.ingredients);
    expect(res.body.description).toBe(plate.description);
  });

  it('should send error if invalid when deleting a plate', async done => {
    const res = await req(app).delete('/plates/12345').set('Authorization', token);
    done();

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  })
})
