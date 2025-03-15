// Import Express
const express = require('express');

// Initialize the app
const app = express();
const port = 3000;

// Define the /test route
app.get('/test', (req, res) => {
    res.json({ message: "Express is working! Lee Alquisola" });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
