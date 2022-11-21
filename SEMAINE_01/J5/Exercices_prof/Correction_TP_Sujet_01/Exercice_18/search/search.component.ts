import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { PastrieService } from '../pastrie.service';
import { Pastrie } from '../pastrie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchPastries: EventEmitter<Pastrie[]> = new EventEmitter(); // émission des données vers le parent

  constructor(private pastrieService: PastrieService) { }

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    console.log(this.pastrieService.search(form.value['word']));
  }

}
