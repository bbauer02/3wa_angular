import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PastrieModule} from "./pastrie/pastrie.module";
import {RouterOutlet} from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PastrieModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
