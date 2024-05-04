const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello from home");
});
app.get("/about", (req, res) => {
  res.send("hello from about");
});

app.listen(8000, () => {
  console.log("Server started");
});

// const buffer = Buffer.alloc(10);
// buffer.write("hello world");
// console.log(buffer.toString());
