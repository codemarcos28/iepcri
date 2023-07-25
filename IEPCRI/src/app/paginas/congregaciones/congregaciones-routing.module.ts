import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongregacionesComponent } from './congregaciones.component';

const routes: Routes = [
  {
    path: '',
    component: CongregacionesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongregacionesRoutingModule { }
