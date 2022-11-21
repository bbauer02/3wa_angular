import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from "../pastrie";
import {PASTRIES} from "../mock-pastries";

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisseries";
  pastries : Pastrie[]  = PASTRIES;
  selectedPastry : Pastrie;
  filteredPastries : Pastrie[] |null;

  @Input() filters: string|null;
  constructor() { }

  ngOnInit(): void {
    this.filteredPastries = this.pastries;
  }

  ngOnChanges() : void  {
    if(this.filteredPastries) {
      this.filteredPastries = this.pastries;
    }
    if(this.filters) {

      this.filteredPastries = this.pastries.filter(pastrie => (pastrie.name.toLowerCase().includes(this.filters?.toLowerCase() || "")) );
    }
  }

  selectPastry(pastry: Pastrie ) {
    this.selectedPastry = pastry;
  }
}
