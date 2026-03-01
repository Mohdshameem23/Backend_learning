const express = require("express");
const app = express();
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
app.use(express.json())

const auth = (req, res, next) => {
  if (req.body.password === 123) {
    next();
  }
  else{
  return  res.json({
        "Message":"Not Authorized"
    })
  }

};
app.use(auth);
app.get("/", (req, res) => {
  res.send("Api is working");
});
