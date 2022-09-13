var express = require('express');
var router = express.Router();

var user=require("../controllers/userController");

router.get('/',function(req,res){
    user.listUsers(req,res);
});

router.get('/show/:id',function(req,res){
    user.listUserId(req,res);
});

router.post('/save',function(req,res){
    user.save(req,res);
});

router.put('/edit/:id',function(req,res){
    user.editUser(req,res);
});

router.delete('/delete/:id',function(req,res){
    user.deleteUser(req,res);
});

router.delete('/deleteAll/',function(req,res){
    user.deleteAllUser(req,res);
});

module.exports = router;
