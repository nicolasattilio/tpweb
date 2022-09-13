
const mongoose  = require('mongoose');
const assert = require('assert');
const db = 'eDrink';
const url = 'mongodb://localhost/'+db ;

new mongoose.connect(url).then(db=>console.log('DB is connected'))
                     .catch(err=>console.log(err));

module.exports=mongoose;