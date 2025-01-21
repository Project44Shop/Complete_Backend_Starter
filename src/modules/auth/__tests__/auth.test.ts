process.env.JWT_SECRET = "test_secret_key"; // Mock environment variable

import request from 'supertest';
import app from '../../../app'; // Your Express app
import prisma from '../../../../lib/prisma'; // Mock the database
import bcrypt from 'bcrypt';

beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Suppress console.error
  });
  
afterAll(() => {
    jest.restoreAllMocks(); // Restore console.error after tests
  });

jest.mock('../../../../lib/prisma', () => ({
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
  },
}));

const BCRYPT_HASH = '$2b$10$hashedPassword'

const mockUser = {
  id: 1,
  email: 'test@example.com',
  username: 'testuser',
  password: BCRYPT_HASH,
};

const bcryptCompare = jest.spyOn(bcrypt, 'compare') as jest.Mock;

describe('Auth Controller', () => {
  describe('POST /register', () => {
    it('should register a new user', async () => {
      (prisma.user.create as jest.Mock).mockResolvedValue(mockUser);

      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@example.com', username: 'testuser', password: 'password123' });

      expect(res.statusCode).toBe(201);
      expect(res.body).toEqual(mockUser);
    });

    it('should return 500 for registration errors', async () => {
      (prisma.user.create as jest.Mock).mockRejectedValue(new Error('Database error'));

      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'test@example.com', username: 'testuser', password: 'password123' });

      expect(res.statusCode).toBe(500);
      expect(res.text).toBe('Error creating user');
    });
  });

  describe('POST /login', () => {
    it('should log in a user successfully', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      bcryptCompare.mockResolvedValue(true);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'password123' });

      expect(res.statusCode).toBe(200);
      expect(res.headers['set-cookie']).toBeDefined();
      bcryptCompare.mockRestore();
    });

    it('should return 500 for invalid credentials', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(mockUser);
      bcryptCompare.mockResolvedValue(false);

      const res = await request(app)
        .post('/api/auth/login')
        .send({ username: 'testuser', password: 'wrongpassword' });

      expect(res.statusCode).toBe(500);
      expect(res.body.message).toBe('Failed to login');
      bcryptCompare.mockRestore();
    });
  });

  describe('POST /logout', () => {
    it('should clear the authToken cookie and return success', async () => {
      const res = await request(app).post('/api/auth/logout');
  
      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Logout Success');
      expect(res.headers['set-cookie'][0]).toMatch(/authToken=;/); // Check cookie is cleared
    });
  });
  

  describe('POST /logout', () => {
    it('should log out a user successfully', async () => {
      const res = await request(app).post('/api/auth/logout');

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toBe('Logout Success');
    });
  });
});
