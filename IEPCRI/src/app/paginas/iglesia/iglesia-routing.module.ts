import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IglesiaComponent } from './iglesia.component';

const routes: Routes = [
  {
    path: '',
    component: IglesiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IglesiaRoutingModule { }
