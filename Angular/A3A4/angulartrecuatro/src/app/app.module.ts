import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { RegisterComponent } from './register/register.component';
import { VerificarComponent } from './verificar/verificar.component';
import { OlvidarPassComponent } from './olvidar-pass/olvidar-pass.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    RegisterComponent,
    VerificarComponent,
    OlvidarPassComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
