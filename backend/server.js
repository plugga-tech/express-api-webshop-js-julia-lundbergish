const express = require("express");
const app = express();

app.listen(3000, function() {
    console.log("Servern är igång");
});

app.get("/", function(req, res){

    res.send("Webbshop API");
});