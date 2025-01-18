// 5. Swagger Configuration
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Complete Backend API Starter',
        version: '1.0.0',
        description: 'Backend Starter',
      },
      servers: [
        {
          url: `http://localhost:${process.env.PORT || 9000}`,
        },
      ],
    },
    apis: ['./src/**/*.ts'], 
  // Path to your route files
  };

  export default swaggerOptions;