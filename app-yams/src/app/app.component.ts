import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-yams';
  filters: string | null = null;

  searchPastry(event: Event) {
    const filters = (event.target as HTMLInputElement).value;
    this.filters = filters;
  }

}
