const express = require('express');
const router = express.Router();
const ownerModels = require("../models/owner-model");
const ownerModel = require('../models/owner-model');

if(process.env.NODE_ENV === "development"){
    router.post("/create", async function(req, res) {
        let owners = await ownerModel.find();
        if (owners.lengthc > 0) { return res.status(503).send("you don't have permission for it.");
        }
        let {fullname, email, password} = req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password,
          
        });
        res.status(201).send(createdOwner);
     });
    }

router.get("/", function(req, res){
    res.send("hey its working");
});

module.exports = router;