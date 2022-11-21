import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms'; // template-driven
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchPastries: EventEmitter<Pastrie[]> = new EventEmitter(); // émission des données vers le parent
  @Output() partialPastrieSearch: EventEmitter<Pastrie[]> = new EventEmitter();

  word:string = ''; // instanciation du word pour le NgModel

  constructor(private pastrieService: PastrieService) { }

  ngOnInit() {}

  // Fonction de recherche sur le submit
  onSubmit(form: NgForm): void {
    let results = this.pastrieService.search(form.value['word']);
    if (results.length > 0) this.searchPastries.emit(results);
  }

  onChangeEmit($event: NgModel) {
    let results = this.pastrieService.search($event.value['word']);
    if (results.length > 0) this.partialPastrieSearch.emit(results);
  }
}
