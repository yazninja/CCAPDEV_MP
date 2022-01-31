const express = require("express");
const { engine } = require("express-handlebars");
const res = require("express/lib/response");

const app = express();

const port = 3000;
app.listen(port, function(){
    console.log("Listening on port " + port);
});
app.use(express.static(__dirname =  "./public"));

app.set("view engine", "hbs");
app.engine("hbs", engine({extname: "hbs"}));

app.get("/", function(req, res){
    res.render("index");
});