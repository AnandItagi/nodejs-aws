const express = require("express");
const app = express();
app.get("/test", (req, res) => res.send("Hello world dockerised"));
app.listen(3000, () => {
  console.log("listening on port 3000");
});
