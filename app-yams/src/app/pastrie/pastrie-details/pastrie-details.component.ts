import { Component, OnInit, Input  } from '@angular/core';
import { Pastrie,List} from "../pastrie";
import {PastrieService} from "../pastrie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pastrie-details',
  templateUrl: './pastrie-details.component.html',
  styleUrls: ['./pastrie-details.component.scss']
})
export class PastrieDetailsComponent implements OnInit {

   ingredients:Array<string> = [];

  @Input() pastrie:Pastrie | undefined;
  constructor(private pastrieService: PastrieService, private route:ActivatedRoute, private router: Router) { }

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
    const pastrieId : string|null = this.route.snapshot.paramMap.get('id');
    this.pastrie = this.pastrieService.getPastrieById(pastrieId);
    this.ingredients = this.pastrieService.getIngretientByPastrie(pastrieId);
    // this.pastrieService.getPastrieById(pastrieId);
  }

  ngOnChanges() :void {
    if(this.pastrie) {
     // this.ingredients = this.pastrieService.getIngretientByPastrie(this.pastrie);
      /*const rawIngredientList = this.ingredientsLists.find(elem => elem.id === this.pastrie?.id);
      this.ingredients = rawIngredientList?.list || [];*/
    }
  }

  goToPastriesList() {
    this.router.navigate(['/pastries'])
  }
}
