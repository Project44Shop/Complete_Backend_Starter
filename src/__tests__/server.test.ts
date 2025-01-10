import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Let's build some good stuff!");
  });
});
