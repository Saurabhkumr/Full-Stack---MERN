const express = require("express");
const app = express();
const port = 5004;

// Middleware to parse JSON bodies
app.use(express.json());

// Route for GET request
app.get("/method", (req, res) => {
  res.json({ method: "GET" });
});

// Route for POST request
app.post("/method", (req, res) => {
  res.json({ method: "POST" });
});

// Route for PUT request
app.put("/method", (req, res) => {
  res.json({ method: "PUT" });
});

// Route for PATCH request
app.patch("/method", (req, res) => {
  res.json({ method: "PATCH" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
