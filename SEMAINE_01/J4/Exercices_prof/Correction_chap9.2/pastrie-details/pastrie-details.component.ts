// Component enfant : la classe Input est nécessaire
import {Component, OnInit, Input,  Output, EventEmitter} from '@angular/core';
import { Pastrie, List, CHOICE} from '../pastrie';

import {INGREDIENTS_LISTS, PASTRIES} from '../mock-pastries';
import { PastrieService } from '../pastrie.service';

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

  @Input() pastrie : Pastrie | null = null; // propriété [pastrie] liée
  @Input() maxPastries : any = null;
  @Output() changePreference: EventEmitter<string> = new EventEmitter();
  @Output() hidePastrie :EventEmitter<string> = new EventEmitter(); // On définit notre Output pour transmettre l'information au parent

  sens:boolean = true;
  list: List | undefined;
  ingredientsLists: List[] = []; // récupération de la liste des listes d'ingrédients
  ingredients:Array<string> = [];

  constructor(private pastrieService: PastrieService) {

  }

  ngOnInit(): void {
    console.log(this.pastrie); // pour l'instant cela retourne undefined ... C'est normal
  }

  // dès que quelque chose "rentre" dans le component enfant via une propriété Input
  // ou à l'initialisation du component (une fois) cette méthode est appelée
  ngOnChanges(){
    // on vérifie que l'on a bien cliqué sur une pâtisserie avant de rechercher dans la liste
    // des ingrédients.
    if(this.pastrie) {
      this.list = this.pastrieService.getPastrieIngredientsList(this.pastrie.id);  // récupération d'un objet List

      if (this.list)
        this.ingredients = this.list?.list;  // récupération de la liste des ingrédients.
    }
  }

  modifyIngredientsOrder(){
    if(this.sens) {
      this.ingredients.reverse();
      this.sens = false;
    } else {
      this.ingredients.reverse();
      this.sens = true;
    }
  }

  // méthode permettant la transmission de l'id de la pâtisserie au composant parent
  preference(id: string) {
    this.changePreference.emit(id)
  }

  // méthode permettant la transmission de l'id de la pâtisserie à cacher au composant parent
  selectionToHide(id: string) {
    this.hidePastrie.emit(id);
  }
}
