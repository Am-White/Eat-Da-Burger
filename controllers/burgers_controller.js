//Dependencies
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

//HTML routes
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hsbObject = {
            burgers: data
        }
        console.log(hsbObject);
        res.render("index", hsbObject);
    });
});

//API routes
router.post("/api/burgers", function(req,res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ], function(result) {
        res.json({ id: result.insertId});
    });
});

//API devour > devoured 
router.put("/api/burgers/:id", function(req,res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changeRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use
module.exports = router;