import { authEmail, authPass, authName } from '../middlewares/authMiddleware';
import express from 'express';
import request from 'supertest';

const app = express();
app.use(express.json());

app.post('/authEmail', authEmail, (req, res) => res.status(200).send());
app.post('/authPass', authPass, (req, res) => res.status(200).send());
app.post('/authName', authName, (req, res) => res.status(200).send());

describe('Middleware tests', () => {
  it('authEmail should return 400 if email is invalid', async () => {
    const res = await request(app)
      .post('/authEmail')
      .send({ email: 'invalid' });
    expect(res.statusCode).toEqual(400);
  });

  it('authPass should return 400 if password is less than 6 characters', async () => {
    const res = await request(app)
      .post('/authPass')
      .send({ password: '123' });
    expect(res.statusCode).toEqual(400);
  });

  it('authName should return 400 if name is less than 3 characters', async () => {
    const res = await request(app)
      .post('/authName')
      .send({ name: 'ab' });
    expect(res.statusCode).toEqual(400);
  });
});
