const express = require("express");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));


app.listen(PORT, function () {
    console.log("Listening on PORT " + PORT);
});
