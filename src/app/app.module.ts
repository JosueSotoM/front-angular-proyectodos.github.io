import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearLigasComponent } from './crear-ligas/crear-ligas.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { EquiposComponent } from './equipos/equipos.component';
import { Routes } from '@angular/router';
import { ModalCrearLigasComponent } from './modal-crear-ligas/modal-crear-ligas.component';
import { InvitarComponent } from './invitar/invitar.component';
import { ClasificacionesComponent } from './clasificaciones/clasificaciones.component';

import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './components/signin/signin.component';
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



const appRoutes:Routes=[];
@NgModule({
  declarations: [
    AppComponent,
    CrearLigasComponent,
    RegistroComponent,
    LoginComponent,
    PrincipalComponent,
    EquiposComponent,
    ModalCrearLigasComponent,
    InvitarComponent,
    ClasificacionesComponent,
    SigninComponent,
    SignupComponent,
    UserProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
