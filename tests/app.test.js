const request = require('supertest');
const app = require('../app');

describe('Counter App Tests', () => {
    it('should return the initial counter value', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Current Counter Value: 0');
    });

    it('should increment the counter', async () => {
        const res = await request(app).get('/increment');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Counter Incremented!! New Value: 1');
    });

    it('should return the updated counter value after increment', async () => {
        await request(app).get('/increment');
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('Current Counter Value: 2');
    });
});