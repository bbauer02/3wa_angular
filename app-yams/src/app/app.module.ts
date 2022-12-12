import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PastrieModule} from "./pastrie/pastrie.module";
import {AppRoutingModule} from "./app-routing/app-routing.module";



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PastrieModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
