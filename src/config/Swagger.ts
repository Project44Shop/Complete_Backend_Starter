// 5. Swagger Configuration
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Course Platform API',
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
    // apis: ['./src/routes/**/*.ts'],
  // Path to your route files
  };

  export default swaggerOptions;