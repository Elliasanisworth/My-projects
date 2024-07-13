const express = require('express');
const router = express.Router();
const isLoggedIn = require("../middelwares/isLoggedIn");

router.get("/", (req, res) => {
    try{
    let error = req.flash("error");
    res.render("index", {error});
    }catch (err) {
        next(err);
    }
});
router.get("/shop",isLoggedIn, function(req, res, next){
    try{
        res.render("shop");
    }catch (err){
        next(err);
    }
});
router.get("/logout", isLoggedIn, function(req, res){
    try {
        res.render("shop")
    } catch (error) {
        next(err);
    }
});

module.exports = router;