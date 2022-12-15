
const mongoose = require('mongoose');
const express = require('express');
//const url = 'mongodb://root:example@mongo:27017'

// Connexion à la base de données
mongoose
    .connect("mongodb://localhost:27017/yams", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(init); // Toutes les méthodes de mongoose renvoient des promesses

async function init() {

    console.log("initialisation de la connexion")
}