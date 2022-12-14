import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieDetailsComponent } from "./pastrie-details/pastrie-details.component";
import {PastriesComponent} from "./pastries/pastries.component";
import { BorderCardDirective} from "./border-card.directive";
import { PastrieTagColorPipe } from "./pastrie-tag-color.pipe";
import {AppRoutingModule} from "./app-routing.module";
import { PastrieFormComponent } from './pastrie-form/pastrie-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastrieTagColorPipe,
    PastrieFormComponent
  ],
  exports: [
    PastriesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class PastrieModule { }
