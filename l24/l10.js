//express
const express = require("express");
const app = express();

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/:me", (req, res) =>{
    res.send("ROOT FOLDER")
    console.log(req.query);
    console.log(req.body);
    console.log(req.headers);
    console.log(req.params);
    res.status(404).send("FOUND ROOT");
})


app.listen(3000);