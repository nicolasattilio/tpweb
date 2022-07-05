var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    id:Number,
    nombrecompleto:{nombre:String,apellido:String},
    mail:String,
    edad:Number,
    rol:Number,
})

module.exports = mongoose.model('User',UserSchema);