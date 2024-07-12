const express = require('express');
const router = express.Router();
const {resigterUser, loginUser} = require("../controllers/authcontroller"); 

router.get("/", function(req, res){
    res.send("hey its working");
});
router.post("/register", resigterUser );

router.post("/login", loginUser);

module.exports = router;