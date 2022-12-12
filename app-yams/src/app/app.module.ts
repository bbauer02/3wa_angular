import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from "@angular/router";
import {PastriesComponent} from "./pastrie/pastries/pastries.component";

import { AppComponent } from './app.component';
import {PastrieModule} from "./pastrie/pastrie.module";

// Définition de la constante pour les Routes

const pastriesRoutes: Routes = [
  {
    path: 'pastries',
    component: PastriesComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PastrieModule,
    RouterModule.forRoot(pastriesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
