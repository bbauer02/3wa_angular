import { Component, OnInit, Input  } from '@angular/core';
import { Pastrie,List} from "../pastrie";
import {PastrieService} from "../pastrie.service";



@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

   ingredients:Array<string> = [];

  @Input() pastrie:Pastrie;
  constructor(private pastrieService: PastrieService ) { }

  AddRecipe(event :Event) {
    const inputText = (event.target as HTMLInputElement).value;
    this.ingredients.push(inputText);
  }

  DeleteRecipe(recipe:string) {
  /*  const filtered = this.ingredients.filter((ingredient) => {
        return ingredient !== recipe;
    });*/
    const filtered = this.ingredients.filter((ingredient) => ingredient !== recipe)
    this.ingredients = filtered;

  }

  ngOnInit(): void {

  }

  ngOnChanges() :void {
    if(this.pastrie) {
     this.ingredients = this.pastrieService.getIngretientByPastrie(this.pastrie);
      /*const rawIngredientList = this.ingredientsLists.find(elem => elem.id === this.pastrie?.id);
      this.ingredients = rawIngredientList?.list || [];*/
    }
  }
}
