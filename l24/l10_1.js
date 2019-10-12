//express
const express = require("express");
const app = express();

app.use(express.static(__dirname + "/l10_static"));

app.listen(3000);