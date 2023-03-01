import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoggerComponent } from './logger/logger.component';

import { HomeComponent } from './home/home.component';




const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'login', component: LoggerComponent },






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
