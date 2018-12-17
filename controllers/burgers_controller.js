//reference to express and router
var express = require("express");
var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js")

//called burger.all, pass burger data into function to add in burger data
router.get("/", function(req,res){

    burger.all(function(burgerData){
        console.log(burgerData);
        res.render("index", { burgerData });
    })
})

router.put('/burgers/update', function (req, res) {
    burger.update(req.body.burger_id, function(result) {
        console.log(result);
         res.redirect('/')
    })
});
router.post('/burgers/create', function (req, res) {
    burger.create(req.body.burger_name, function() {
        res.redirect('/');
    })
}); 
//export route to link files
module.exports = router;