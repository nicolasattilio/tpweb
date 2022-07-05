var mongoose=require('mongoose');
var DrinkSchema=new mongoose.Schema({
    id:Number,
    nombre:String,
    tipo:String,
    tamano:Number,
    origen:String,
})

module.exports = mongoose.model('Drink',DrinkSchema);