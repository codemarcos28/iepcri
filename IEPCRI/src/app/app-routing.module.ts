import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MultimediaComponent } from './paginas/multimedia/multimedia.component';
import { CongregacionesComponent } from './paginas/congregaciones/congregaciones.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { RecursosComponent } from './paginas/recursos/recursos.component';
import { IglesiaComponent } from './paginas/iglesia/iglesia.component';

const routes: Routes = [
  {
    path: 'iglesia',
    loadChildren: () => import('./paginas/iglesia/iglesia.module').then (m => m.IglesiaModule)
  },
  {
    path: 'multimedia',
    loadChildren: () => import('./paginas/multimedia/multimedia.module').then (m => m.MultimediaModule)
  },
  {
    path: 'congregaciones',
    loadChildren: () => import('./paginas/congregaciones/congregaciones.module').then (m => m.CongregacionesModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./paginas/contacto/contacto.module').then (m => m.ContactoModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./paginas/recursos/recursos.module').then (m => m.RecursosModule)
  },
  {
    path: '**',
    redirectTo: 'iglesia'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
