import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PastrieDetailsComponent } from "./pastrie-details/pastrie-details.component";
import {PastriesComponent} from "./pastries/pastries.component";
import { BorderCardDirective} from "./border-card.directive";
import { PastrieTagColorPipe } from "./pastrie-tag-color.pipe";

@NgModule({
  declarations: [
    PastriesComponent,
    PastrieDetailsComponent,
    BorderCardDirective,
    PastrieTagColorPipe
  ],
  exports: [
    PastriesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PastrieModule { }
