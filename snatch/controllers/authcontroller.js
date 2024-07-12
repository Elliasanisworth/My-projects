const usermodel = require("../models/user-models")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {genratetoken} = require("../utils/genratetoken");

  module.exports.resigterUser = async function(req, res) {
    try{
     let {email, password, fullname} = req.body;

    let user = await usermodel.findOne({email: email});
    if (user) return res.status(401).send("An account already exists. Please Login ")     

     bcrypt.genSalt(10, function(err, salt){
        bcrypt.hash(password, salt,async function (err, hash){
            if(err) return res.send(err.message);
            else {
                let user = await usermodel.create({
                    email,
                    password: hash,
                    fullname,
                });
            let token = genratetoken(user);    
                res.cookie("token", token)
                res.send("user created succesfully");
            }
        })
     })
    }
    catch(err){
     res.send(err.message);
    }
 }

 module.exports.loginUser = async function(req, res) {
    let {email, password} = req.body;
    let user = await usermodel.findOne({email:email});
    if(!user) return res.send("Email or Password is wrong");

    bcrypt.compare(password, user.password, function(err, result){
        if (result) {
            let token = genratetoken(user);
            res.cookie("token", token);
            res.send("you can login");
        }else {
            return res.send("email or password is incorret")
        }
    })
 }