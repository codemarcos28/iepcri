import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultimediaComponent } from './paginas/multimedia/multimedia.component';
import { CongregacionesComponent } from './paginas/congregaciones/congregaciones.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RecursosComponent } from './paginas/recursos/recursos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { ContactComponent } from './componentes/contact/contact.component';
import { ServicesComponent } from './componentes/services/services.component';
import { GalleryComponent } from './componentes/gallery/gallery.component';
import { IglesiaComponent } from './paginas/iglesia/iglesia.component';

@NgModule({
  declarations: [
    AppComponent,
    MultimediaComponent,
    CongregacionesComponent,
    ContactoComponent,
    RecursosComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    GalleryComponent,
    IglesiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
