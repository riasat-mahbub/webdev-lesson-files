const express  = require('express');
const app = express();

app.get('/hoTake', (req, res) => {
    const boi = {
        hot: true,
        gay: false
    }

    res.send(boi);
})


app.get( '/', (req, res) => {
    const boi = {
        hot: true,
        gay: false
    }

    res.send(boi);
})

app.post('/hoTake', (req, res) => {
    const boi = {
        hot: true,
        gay: false
    }

    res.send("boi");
})


app.listen(3000);