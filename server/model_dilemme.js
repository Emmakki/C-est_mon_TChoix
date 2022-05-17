var mongoose = require('mongoose');

//Création Schéma enregistrement d'une partie
const Schema = mongoose.Schema;
const questionSchema = new Schema({
    choix1: String,
    choix2:   String,
    nbClique1: Number,
    nbClique2: Number,
    visible: String,
    jaime: Number,
  });

//Création du model
const Question = mongoose.model('dilemme', questionSchema);

module.exports = Question;
