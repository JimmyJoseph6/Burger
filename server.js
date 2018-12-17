//this file is in charge of creating express connection and running node server

//boiler plate for node server
var express = require("express");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static("/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//references routes file
var routes = require("./controllers/burgers_controller.js")
app.use("/", routes);

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("app listening on " + port)
});