//pokemon.js
var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema({
    name: String, //shorthand declaration of only field type
    cp: {type: Number, default:0}
});

module.exports = mongoose.model('Pokemon', pokemonSchema);