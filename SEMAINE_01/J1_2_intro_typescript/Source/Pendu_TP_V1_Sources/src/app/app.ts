/**
 * Sources
 * @author : Vous 
 */
import { MockWords } from "../data";
import { Game, Status } from "../game";
import * as process from "process"; // Typage de process pour la gestion des flux

/**
 * Bootstrap
 */
process.stdin.setEncoding('utf8'); // Définit l'encodage des caractères dans le flux de la console.

let game = new Game(MockWords); // Initialisation du jeu

//2). Le traitement des entrées se fait ici
process.stdin.on('data', (data) => {
  game.run(data.toString().trim()); // logique du jeu

  // écrivez ici le code nécessaire pour faire fonctionner le jeu

  console.log('message');
  process.stdout.write('> '); 

});

// 1.) Au début ce code s'exécute puis après tout se passe dans stdin.on('data')
console.log(game.message);
process.stdout.write('> ');