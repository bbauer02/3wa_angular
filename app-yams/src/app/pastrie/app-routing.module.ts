import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PastriesComponent} from "./pastries/pastries.component";
import {PastrieDetailsComponent} from "./pastrie-details/pastrie-details.component";
import {PastrieFormComponent} from "./pastrie-form/pastrie-form.component";

const routes: Routes = [
  {path: 'pastries', component: PastriesComponent},
  {
    path: 'pastrie',
    children:[
      {
        path: 'create',
        component: PastrieFormComponent
      },
      {
        path: ':id',
        component: PastrieDetailsComponent
      }
    ]
  },
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
