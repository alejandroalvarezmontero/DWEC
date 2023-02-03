import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerComponent } from './logger/logger.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OlivdarPassComponent } from './olivdar-pass/olivdar-pass.component';
import { VerificarComponent } from './verificar/verificar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoggerComponent,
    RegisterComponent,
    HomeComponent,
    OlivdarPassComponent,
    VerificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
