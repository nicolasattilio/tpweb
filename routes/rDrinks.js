var express = require('express');
const { model } = require('mongoose');
var router = express.Router();

var drink=require("../controllers/drinkController.js");

router.get('/',function(req,res){
    drink.listDrink(req,res);
})

router.get('/show/:id',function(req,res){
    drink.listDrinkId(req,res);
})

router.post('/save',function(req,res){
    drink.save(req,res);
})

router.put('/edit/:id',function(req,res){
    drink.editDrink(req,res);
})

router.delete('/delete/:id',function(req,res){
    drink.delete(req,res);
})

router.delete('/deleteAll',function(req,res){
    drink.deleteDrink(req,res);
})

module.exports = router;
