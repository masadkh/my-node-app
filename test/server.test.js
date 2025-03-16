const request = require('supertest');
const app = require('../server'); // Import app, not app.listen()

describe('GET /', () => {
    it('should return Hello World message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toBe('Hello, World! This is a CI/CD pipeline demo.');
    });
});

