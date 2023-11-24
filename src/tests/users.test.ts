import request from 'supertest';
import express from 'express';
import { faker } from '@faker-js/faker';

import userRouter from '../routes/userRouter';

const app = express();
app.use(express.json());
app.use('/user', userRouter);

describe('User Routes', () => {
  let createdUserId: number | undefined;

  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      email: faker.internet.email(),
      password: 'password123',
    };

    const response = await request(app)
      .post('/user/create')
      .send(userData)
      .expect(201);

    expect(response.body).toHaveProperty('user');
    expect(response.body.user.name).toBe(userData.name);
    expect(response.body.user.email).toBe(userData.email);

    createdUserId = response.body.user.id;
  });

  it('should get a list of all users', async () => {
    const response = await request(app)
      .get('/user/list')
      .expect(200);

    expect(response.body).toHaveProperty('users');
    expect(Array.isArray(response.body.users)).toBe(true);
  });

  it('should update a user', async () => {
    if (!createdUserId) {
      throw new Error('User ID not found. Make sure to run the creation test first.');
    }

    const updatedUserData = {
      name: 'Updated User',
      email: faker.internet.email(),
      password: 'updatedpassword',
    };

    const response = await request(app)
      .put(`/user/update/${createdUserId}`)
      .send(updatedUserData)
      .expect(200);

    expect(response.body).toHaveProperty('user');
    expect(response.body.user.name).toBe(updatedUserData.name);
    expect(response.body.user.email).toBe(updatedUserData.email);
  });

  it('should delete a user', async () => {
    if (!createdUserId) {
      throw new Error('User ID not found. Make sure to run the creation test first.');
    }

    const response = await request(app)
      .delete(`/user/delete/${createdUserId}`)
      .expect(200);

    expect(response.body).toHaveProperty('message', 'User deleted successfully');
  });
});
