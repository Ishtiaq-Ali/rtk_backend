const express = require("express");
const cors = require("cors"); 
const app = express();
const conn = require('./conn/conn')
const list = require("./routes/list");

app.use(cors()); 
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v2/", list);
conn();
app.listen(1000, () => {
  console.log("server started");
});
