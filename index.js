const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Hello world dockerised"));
app.listen(80, () => {
  console.log("listening on port 3000");
});
