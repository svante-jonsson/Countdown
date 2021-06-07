const express = require('express')
const app = express()
const port = 3000

//SET
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    res.render("pages/index", {Hello: "TJO"});
  });

app.listen(port, () => console.log(`Example app listening on port port!`))