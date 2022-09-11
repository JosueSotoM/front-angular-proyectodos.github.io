import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLigasComponent } from './crear-ligas/crear-ligas.component';
import { RegistroComponent } from './registro/registro.component';
import { MisLigasComponent } from './mis-ligas/mis-ligas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearLigasComponent,
    RegistroComponent,
    MisLigasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
