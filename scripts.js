// scripts.js
// Import the express and path libraries
const express = require('express');
const path = require('path');

// Create an express application
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Always serve the index.html file for any GET request
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});