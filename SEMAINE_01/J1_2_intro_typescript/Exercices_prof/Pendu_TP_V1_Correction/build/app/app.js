"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Correction du TP jeu du pendu
 * @author : Antoine
 */
const data_1 = require("../data");
const game_1 = require("../game");
const process = require("process");
/**
 * Bootstrap
 */
process.stdin.setEncoding('utf8'); // Définit l'encodage des caractères dans le flux de la console.
let game = new game_1.Game(data_1.MockWords); // Initialisation du jeu
process.stdin.on('data', (data) => {
    game.run(data.toString().trim()); // logique du jeu
    if (game.status === game_1.Status.Winner || game.status === game_1.Status.Loser) {
        console.log(game.final());
        process.stdin.pause();
    }
    else {
        console.log(game.message);
        process.stdout.write('> ');
    }
});
console.log(game.message);
process.stdout.write('> ');
