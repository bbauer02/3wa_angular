import { Component, OnInit, Input } from '@angular/core';
import { Pastrie } from "../pastrie";
import {PastrieService} from "../pastrie.service";

@Component({
  selector: 'app-pastries',
  templateUrl: './pastries.component.html',
  styleUrls: ['./pastries.component.scss']
})
export class PastriesComponent implements OnInit {

  titlePage: string = "Page principale : liste des pâtisseries";
  pastries : Pastrie[]  = this.pastrieService.getPastrieList();
  selectedPastry : Pastrie;
  filteredPastries : Pastrie[] |null;

  constructor(private pastrieService: PastrieService ) {

  }

  @Input() filters: string|null;

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
