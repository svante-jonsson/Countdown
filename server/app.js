//IMPORTED DEPENDENCIES
const express = require('express')

//VARIABLE INITIALIZE
const app = express()
const port = 3000

//SET
app.set("view engine", "ejs");

//USE
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/client/"));

//GET
app.get("/", async (req, res) => {
    res.render("pages/index", {Hello: "TJO"});
  });

app.listen(port, () => console.info(`Server listening on port ${port}!\nAccess the site on http://localhost:${port}`))