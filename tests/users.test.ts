import request from 'supertest';
import express from 'express';
import userRouter from '../src/routes/userRouter';

const app = express();

app.use(userRouter);

describe('Test user routes', () => {
    it('should create a new user', async () => {
        // const response = await request(app)
        //     .post('/user/create')
        //     .send({
        //         name: 'Samuel Lucas',
        //         email: 'samuellucas24383@gmail.com',
        //         password: '123456789'
        //     });
        // expect(response.body.message).toContain("User created successfully");
        
    });

    // it('should get a list of all users', async () => {
    //     const response = await request(app).get('/list');
    //     expect(response.statusCode).toBe(200);
    // });

    // it('should update a user', async () => {
    //     const response = await request(app)
    //         .put('/update/1')
    //         .send({
    //             name: 'Updated User',
    //             email: 'updateduser@example.com',
    //             password: 'updatedpassword'
    //         });
    //     expect(response.statusCode).toBe(200);
    // });

    // it('should delete a user', async () => {
    //     const response = await request(app).delete('/delete/1');
    //     expect(response.statusCode).toBe(200);
    // });
});