const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware to handle JSON data
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Basic route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});