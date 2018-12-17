
//this file houses all mysql connection data
var mysql = require("mysql");

var connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "burgers_db1"
});

connection.connect(function(err) {

    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
   
    console.log("connected as id " + connection.threadId);
});

//Export connnection for ORM to use.
module.exports = connection;