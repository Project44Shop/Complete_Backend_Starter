# Course Platform API

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

---

## 📦 Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/Course-Platform-Backend
   cd Course-Platform-Backend
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
│   ├── __tests__/        # Unit tests for the application
│   ├── config/           # Configuration files (e.g., environment setup)
│   ├── controllers/      # Route handler logic for the application
│   ├── middlewares/      # Middleware functions for request handling
│   ├── models/           # Prisma models (database schemas)
│   ├── routes/           # API route definitions
│   ├── services/         # Business logic and service layer
│   ├── utils/            # Utility functions and helpers
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

---

