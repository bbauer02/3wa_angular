import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    // récupération des données du formulaire
    console.log(form.value['word']); // récupération d'une valeur spécifique
  }

}
