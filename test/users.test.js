const request = require("supertest");
const app = require('../src/index');

// const Users = require('../src/models/Users');
// jest.mock("../src/models/Users");

describe('POST /Users', () => {
    test('Response will be 400 status if the name is missing from the user', async () => {
        const response = await request(app).post('/Users/login').send({
                email: 'anacletnzagwaneza@gmail.com',
                password: '1234567890'
            });
            console.log({request})
        expect(response.statusCode).toBe(400);
    });
});
