import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OlvidarPassComponent } from './olvidar-pass/olvidar-pass.component';
import { VerificarComponent } from './verificar/verificar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    RegisterComponent,
    HomeComponent,
    OlvidarPassComponent,
    VerificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

