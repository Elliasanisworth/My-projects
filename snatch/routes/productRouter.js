const express = require('express');
const router = express.Router();

router.get("/", function(req, res){
    try {
        res.send("hey its working");
    } catch (error) {
        next(err);
    }
});

module.exports = router;