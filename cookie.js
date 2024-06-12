const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

// Use cookie parser middleware
app.use(cookieParser());

// Route handler to set cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("username", "john", { maxAge: 900000, httpOnly: true });
  res.send("Cookie set");
});

// Route handler to get cookie
app.get("/get-cookie", (req, res) => {
  const username = req.cookies.username;
  res.send("Cookie value: " + username);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
