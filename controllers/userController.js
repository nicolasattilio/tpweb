var mongoose = require('mongoose');
var User = require("../models/userModel");
var userController={};


//Lista todas todos los usuarios
userController.listUsers=function(req,res){
    User.find({}).exec(function(err,users){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Listando Usuarios");
            res.json(users);
        }
    })
}
//Lista el usuario buscado
userController.listUserId=function(req,res){
    User.findOne({id:req.params.id}).exec(function(err,user){
        if(err){
            console.log("Error", err);
            res.json(err);
        }else{
            res.json(user);
        }
    })
}


//Añade un usuario
userController.save=function(req,res){
    var user=new User(req.body);
    user.save(function(err){
         if(err){
            console.log("Error", err);
        }else{
            console.log("Se creo un nuevo usuario/n"+user);
            res.json(user);
        }
    })
}


//Edita un usuario
userController.editUser=function(req,res){
    var user= {
        id:req.body.id,
        nombrecompleto:req.body.nombrecompleto,
        mail:req.body.mail,
        edad:req.body.edad,
        rol:req.body.rol,
    }
    User.findOneAndUpdate({id:req.params.id},{$set: user},{new:true}).exec(function(err,user){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se modifico el usuario: "+user);
            res.json(user);
        }
    })
}


//Borra un usuario
userController.deleteUser=function(req,res){
    User.findOneAndDelete({id:req.params.id}).exec(function(err,user){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se borro el usuario");
            res.json({"mensaje":"Se borro el usuario"});
        }
    })
}

userController.deleteAllUser=function(req,res){
    User.deleteMany({}).exec(function(err,user){
        if(err){
            console.log("Error", err);
        }else{
            console.log("Se borraron todos los usuarios");
            res.json({"mensaje":"Se borraron todos los usuarios"});
        }
    })
}


module.exports=userController;