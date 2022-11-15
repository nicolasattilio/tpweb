var mongoose=require('mongoose');
var UserSchema=new mongoose.Schema({
    id:Number,
    nombre:String,
    apellido:String,
    mail:String,
    pass:String,
    edad:Number,
    rol:Number,
})

module.exports = mongoose.model('User',UserSchema);