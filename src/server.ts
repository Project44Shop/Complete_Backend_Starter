// This file should handle the server initialization.
// Import the app from app.ts and start the server.

import app from './app';

// Load environment variables
const PORT = process.env.PORT || 9000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});