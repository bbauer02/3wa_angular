import {Component, OnInit} from '@angular/core';

// Importez la définition de la classe et les pâtisseries
import {CHOICE, Pastrie} from '../pastrie';
import {PASTRIES} from '../mock-pastries';
import {PastrieService} from '../pastrie.service';

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisseries à gagner";
  pastries: Pastrie[] = PASTRIES;
  selectedPastrie : Pastrie | null = null;
  maxPastries : number = 3;

  constructor(private pastrieService: PastrieService) {

    // contrôle de la méthode count
    console.log(this.pastrieService.count());
  }

  ngOnInit() {
    this.pastries = this.pastrieService.paginate(0, 5);
  }

  onSelect(pastrie: Pastrie) {

    this.selectedPastrie = pastrie;
  }

  changeParentPreference($event: any) {

    const choice = this.pastries.find(elem => elem.id == $event); // récupération de la pâtisserie
    const customerChoiceWanted = CHOICE.Up;
    const customerChoiceUnwanted = CHOICE.Down;

    let choicesCounts = this.countTagOccurrences(customerChoiceWanted, this.pastries);

    if (choicesCounts < 3 && this.maxPastries > 0) {     // on vérifie que l'on a moins de 3 pâtisseries déjà choisies
      if (choice && choice.choice != customerChoiceWanted) {
        choice.choice = customerChoiceWanted;
        this.maxPastries --;
      } else if (choice && choice.choice === customerChoiceWanted) {
        choice.choice = customerChoiceUnwanted;
        this.maxPastries ++;
      }
    }

  }

  countTagOccurrences(value: CHOICE, haystack: Pastrie[]) {
      let count = 0;

      for (let i = 0; i < haystack.length; i++) {
        let subhaystack = haystack[i];

        if (subhaystack.choice == value)
          count ++
      }

      return count;
  }

  hidePastrieDetail($event: any) {
    const choice = this.pastries.find(elem => elem.id == $event);

    if(choice && choice.choice == CHOICE.Up) {
      choice.choice = CHOICE.Down;
      this.maxPastries ++;
    }

    this.selectedPastrie = null;
  }

  search(){}
}
