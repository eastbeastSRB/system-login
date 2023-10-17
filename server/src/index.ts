const express = require("express"),
  PORT = 5000,
  app = express();

app.get("/users/v1", (req: any, res: any) => {
  console.log('enter in get users')
  res.send("hello user !!!!");
});

app.post('/users/v1', (req: any, res: any) => {
  console.log('enter in post users')
  try {
    res.send("USER ADDED !!!!");
  } catch (error: any) {
    res.send(error.error);
  }

})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));