import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PastriesComponent} from "../pastrie/pastries/pastries.component";
import {PastrieDetailsComponent} from "../pastrie/pastrie-details/pastrie-details.component";

const routes: Routes = [
  {path: 'pastries', component: PastriesComponent},
  {path: 'pastrie/:id', component: PastrieDetailsComponent},
  {path:'', redirectTo: 'pastries', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
