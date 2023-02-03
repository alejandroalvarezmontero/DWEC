import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggerComponent } from './logger/logger.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OlivdarPassComponent } from './olivdar-pass/olivdar-pass.component';
import { VerificarComponent } from './verificar/verificar.component';


const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'login', component: LoggerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recuperacion', component:  OlivdarPassComponent },
  { path: 'verificar', component: VerificarComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
