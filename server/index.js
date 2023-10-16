const express = require("express"),
  PORT = 5000,
  app = express();

app.get("/users/v1", (req, res) => {
  res.send("hello user !!!!");
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));