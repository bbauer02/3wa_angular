import { Injectable } from '@angular/core';

import { Pastrie, List } from './pastrie';
import { INGREDIENTS_LISTS, PASTRIES } from './mock-pastries';

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  private pastries: Pastrie[] = PASTRIES; // _ convention private et protected
  private ingredientsList: List[] = INGREDIENTS_LISTS;

  constructor() { }

  getPastries(): Pastrie[] {

    // Correction Exercice 13
    // return this._pastries;

    // Correction exercice 14.1
    return this.pastries.sort(
      (a, b) => { return b.quantity - a.quantity }
    );
  }

  getPastrie(id: string): Pastrie | undefined {

    return this.pastries.find(pastrie => pastrie.id === id);
  }

  // recherche d'une référence dans la liste
  getPastrieIngredientsList(id: string): List | undefined {

    return this.ingredientsList.find(list => list.id === id);
  }

  // Correction exercice 14.2
  count():number{

    return this.pastries.length;
  }

  paginate(start: number, end: number) : Pastrie[] {

    // utilisez la méthode slice pour la pagination
    return this.pastries.sort(
      (a, b) => { return a.order - b.order }
    ).slice(start, end);
  }

  // méthode search
  search(word: string): Pastrie[] {
    let reg = new RegExp(word.trim(), 'g');

    // filter permet de filter un tableau avec un test. Dans le test ci-dessous on vérifie deux choses :
    // 1/ que pastrie.name.match(re) n'est pas vide. Si ce n'est pas vide alors c'est true
    // 2/ si on a trouvé des noms qui matchaient avec la recherche
    return this.pastries.filter(pastrie => pastrie.name.match(reg) && pastrie.name.length > 0) ;
  }
}
