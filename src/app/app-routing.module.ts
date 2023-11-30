import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTabGroupComponent } from './mat-tab-group/mat-tab-group.component';

const routes: Routes = [
  {
    path:'mat',component:MatTabGroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
