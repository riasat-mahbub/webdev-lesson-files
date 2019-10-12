const express  = require('express');
const app = express();

app.use( (req, res, next) =>{
    console.log("<h1> hello everyone </h1>");
    next();
})

app.get( '/', (req, res) => {

    res.send("Sup Nigga");
})


app.listen(3000);