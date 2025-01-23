// 5. Swagger Configuration
const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Edukante Backend API ',
        version: '1.0.0',
        description: 'Educante Courses API',
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