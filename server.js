const express = require('express');

const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to handle JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'ublic')));

// Import the routes
const indexRoute = require('./routes/index');
const pageRoute = require('./routes/page');
const usersRoute = require('./routes/users');

// Use the routes
app.use('/', indexRoute);
app.use('/', pageRoute);
app.use('/users', usersRoute);

// Start the server
app.listen(PORT, () => {
  // Logging the deleted user ID for debugging
  console.log(`Server is running on http://localhost:${PORT}`);
});
