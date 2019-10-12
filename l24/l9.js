//express
const express = require("express");
const app = express();

//bodyParser
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",  (req, res) => {
    res.send("Mary had a little lamb");
})

app.get("/mary", (req, res) =>{
    const Mary = {
        name: "Mary",
        cup: "D",
        sexy: true,
        gender: true
    }
    res.send(Mary)
})



app.post("/mary", (req, res) => {
    console.log(req.body);
    const marys_bf = {
        strong: true,
        color: "Black",
        Height: 6.11
    }
    
    res.send(marys_bf);
})

app.listen(3000);