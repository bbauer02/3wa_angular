import { Injectable } from '@angular/core';
import {List, Pastrie} from "./pastrie";
import {PASTRIES} from "./mock-pastries";

@Injectable({
  providedIn: 'root'
})
export class PastrieService {

  constructor() { }

  getPastrieList() : Pastrie[] {
    return PASTRIES;
  }

  getPastrieById(pastrieId : string) : Pastrie|undefined {
        return PASTRIES.find(pastrie => pastrie.id == pastrieId);
  }

  getPastrieTagList() : string[] {
    return [
      'sucré',
      'yummy',
      'chocolat',
      'poires',
      'fruits',
      'bananes',
      'framboises',
      'dessert',
      'bg-blueviolet',
      'grey'
    ]
  }


  getIngretientByPastrie(pastrie : Pastrie) {
    const ingredients = this.getIngredientList() || [];
    return ingredients.find(ingredient => ingredient.id === pastrie.id)?.list || []
  }
  getIngredientList() : List[] {
    return [
      {
        "id": "1",
        "list": [
          "ad",
          "qui",
          "deserunt",
          "nulla",
          "cupidatat"
        ]
      },
      {
        "id": "2",
        "list": [
          "ipsum",
          "nostrud",
          "aliqua",
          "sunt"
        ]
      },
      {
        "id": "3",
        "list": [
          "et",
          "qui",
          "consectetur",
          "reprehenderit",
          "sunt",
          "Lorem",
          "laborum"
        ]
      },
      {
        "id": "4",
        "list": [
          "nulla",
          "velit",
          "do"
        ]
      },
      {
        "id": "5",
        "list": [
          "exercitation",
          "magna",
          "deserunt",
          "fugiat",
          "eu",
          "irure",
          "dolore"
        ]
      },
      {
        "id": "6",
        "list": [
          "sint",
          "minim",
          "nisi",
          "labore",
          "consequat",
          "duis",
          "elit"
        ]
      },
      {
        "id": "7",
        "list": [
          "in",
          "nostrud",
          "deserunt"
        ]
      },
      {
        "id": "8",
        "list": [
          "in",
          "nostrud"
        ]
      }
    ]
  }

}
