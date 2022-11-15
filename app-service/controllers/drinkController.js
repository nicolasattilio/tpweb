var mongoose = require('mongoose');
var Drink = require("../models/drinkModel");
var drinkController={};


//Lista todas las bebidas
drinkController.listDrink=function(req,res){
    Drink.find({}).exec(function(err,drinks){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Listando bebidas");
            res.json(drinks);
        }
    })
}

//Lista la bebida buscada
drinkController.listDrinkId=function(req,res){
    Drink.findOne({id:req.params.id}).exec(function(err,drink){
        if(err){
            console.log("Error", err);
            res.json(err);
        }else{
            res.json(drink);
        }
    })
}


//Añade una bedida
drinkController.save=function(req,res){
    var drink=new Drink(req.body);
    drink.save(function(err){
         if(err){
            console.log("Error", err);
        }else{
            console.log("Se creo una nueva bebida "+ drink);
            res.json({"mensaje":"Se creo una nueva el bebida"});
        }
    })
}

//Edita una bebida
drinkController.editDrink=function(req,res){
    var drink={
        id:req.body.id,
        nombre:req.body.nombre,
        tipo:req.body.tipo,
        tamano:req.body.tamano,
        origen:req.body.origen,
    }

    Drink.findOneAndUpdate({id:req.params.id},{$set: drink},{new:true}).exec(function(err,drink){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se modifico la bebida: "+drink);
            res.json({"Se modifico la bebida: ":drink});
        }
    })
}

//Borra una beida
drinkController.delete=function(req,res){
    Drink.findOneAndDelete({id:req.params.id}).exec(function(err,drinks){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se borro la bebida");
            res.json({"mensaje":"Se borro el bebida"});
        }
    })
}

drinkController.deleteDrink=function(req,res){
    Drink.deleteMany({}).exec(function(err,drink){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se borraron todas las bebidas");
            res.json({"mensaje":"Se borraron todas las bebidas"});
        }
    })
}

module.exports=drinkController;