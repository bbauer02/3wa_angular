/**
 * Correction du TP jeu du pendu
 * @author : Antoine
 */
import { MockWords } from "../data";
import { Game, Status } from "../game";
import * as process from "process"

/**
 * Bootstrap
 */
process.stdin.setEncoding('utf8'); // Définit l'encodage des caractères dans le flux de la console.

let game = new Game(MockWords); // Initialisation du jeu
process.stdin.on('data', (data) => {
  game.run(data.toString().trim()); // logique du jeu

  if (game.status === Status.Winner || game.status === Status.Loser) {
    console.log(game.final());
    process.stdin.pause();
  } else {
    console.log(game.message);
    process.stdout.write('> ');
  }

});

console.log(game.message);
process.stdout.write('> ');