import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import {AUTH_PROVIDERS} from 'angular2-jwt';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CrudComponent} from './components/crud/crud.component';
import {Auth} from './services/auth.service';
import { CronometroComponent } from './components/cronometro/cronometro.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CrudComponent,
    CronometroComponent,
    PruebasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,
  AUTH_PROVIDERS, Auth],
  bootstrap: [AppComponent]
})

export class AppModule { }
