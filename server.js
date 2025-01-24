const express = require("express")
const app = express();
const db = require("./db")
const bodyParser = require('body-parser');
app.use(bodyParser.json());
require('dotenv').config()

app.get("/", function (req, res) {
    res.send("welcome to our Hotel")
})

const PORT = process.env.PORT || 3000;

// const personRoutes=require("./routes/personRoutes")
// app.use('/',personRoutes)

const personRoutes = require("./routes/personRoutes")
app.use('/person', personRoutes)

const menuRoutes = require("./routes/menuRoutes")
app.use('/menu', menuRoutes)

app.listen(PORT, () => {
    console.log("listening at port 3000")
})


