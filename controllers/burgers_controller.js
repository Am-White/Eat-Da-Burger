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

