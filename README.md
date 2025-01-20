# Complete Backend Starter

This repository is a Node.js + Express + TypeScript backend starter designed to kickstart development with a modern, scalable architecture. It includes essential tools like Prisma for database management, JWT for authentication, and Swagger for API documentation. Use this starter to build secure, type-safe, and production-ready APIs efficiently.

---

## 🚀 Features

- **Prisma** for database schema management and queries.
- **bcrypt** for secure password hashing.
- **TypeScript** for type-safe development.
- **Express.js** for a minimal and flexible web framework.
- **Swagger** for API documentation and exploration.
- **Jest** with **Supertest** for comprehensive unit testing.
- **ESLint** and **Prettier** for code consistency and formatting.
- **Nodemon** for live reloading during development.
- **Express Rate Limiter** to control request rates.
- **Cookie Parser** for handling cookies.
- **JWT** for authentication.

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Project44Shop/Complete_Backend_Starter.git
   cd Complete_Backend_Starter
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   - Create a `.env` file at the root of the project.
   - Add the following variables:
     ```env
     DATABASE_URL="your_mongodb_connection_string"
     PORT=9000
     JWT_SECRET="your_jwt_secret"
     NODE_ENV="development" # Set to "production" when deploying to enforce HTTPS and secure cookies
     ```

4. **Run database migrations**:

   ```bash
   npx prisma db push
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Run tests**:

   ```bash
   npm run test
   ```

## 🛠️ Project Structure

```
course-backend/
├── node_modules/         # Dependencies installed via npm
├── src/                  # Source code for the application
│   ├── __tests__/        # Unit tests
│   │   ┗ 📜server.test.ts
│   ├── config/           # Configuration files (e.g., Swagger setup)
│   │   ┗ 📜Swagger.ts
│   ├── modules/          # Feature-specific modules
│   │   ├── auth/         # Authentication module
│   │       ├── __tests__/        # Unit tests for authentication
│   │       │   ┗ 📜auth.test.ts
│   │       ├── auth.controller.ts # Handles HTTP requests
│   │       ├── auth.route.ts      # Defines routes for authentication
│   │       └── auth.service.ts    # Encapsulates business logic for authentication
│   ├── app.ts            # App initialization (middleware, routes, etc.)
│   └── server.ts         # Entry point of the application
├── prisma/               # Prisma schema and migrations
│   ├── schema.prisma     # Prisma schema file
├── .env                  # Environment variables (not included in the repo)
├── .gitignore            # Ignored files for Git
├── .prettierrc           # Prettier configuration
├── eslint.config.mjs     # ESLint configuration for linting
├── jest.config.ts        # Jest configuration for testing
├── package.json          # Project metadata and npm scripts
├── package-lock.json     # Lockfile for dependencies
├── README.md             # Documentation for the project
└── tsconfig.json         # TypeScript configuration

```

---

## 🔧 Usage

1. **Fork this repository** to start a new project.
2. Modify the existing routes in `src/routes` or add new ones.
3. Use **Swagger** to document your endpoints for easy exploration.
4. Write and run tests with Jest for every feature you add.
5. Manage your database schema and queries with **Prisma**.
