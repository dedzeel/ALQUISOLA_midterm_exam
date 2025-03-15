const express = require("express");
const app = express();
const PORT = 3000;

// Default route for "/"
app.get("/", (req, res) => {
  res.send("Welcome to my Express server!");
});

// Route for "/test"
app.get("/test", (req, res) => {
  res.json({ message: "Express is working! Alquisola, Lee" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
