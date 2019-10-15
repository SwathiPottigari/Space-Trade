var express = require("express");
var router = express.Router();
var db = require('../models');
const bcrypt = require('bcrypt');


router.post('/login', function (req, res) {
    db.User.findOne({
        where: {
            name: req.body.email
        }
    }).then(function (dbUser) {
        //compares password send in req.body to one in database, will return true if matched.
        if(bcrypt.compareSync(req.body.password,dbUser.password)) {
            //create new session property "user", set equal to logged in user
            req.session.user = dbUser
        }
        else {
            req.session.user = false;
            req.session.error = 'auth failed bro'
        }
        res.json(req.session);
    })
})


//creates new instance of user
router.post('/signup',function(req,res){
    db.User.findOne({
        where: {
            name: req.body.email
        }
    }).then(function(resDB){
        if (resDB === null){
            db.User.create({
                name:req.body.email,
                password:req.body.password
            }).then(function(newUser){
                res.json(newUser);
            }).catch(error=>{throw error});
        }
        else{
            res.json({});
        }
    });    
})

module.exports = router;