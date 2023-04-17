import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroBirthdayComponent } from'./hero-birthday1.component';
import { HeroBirthday2Component } from './hero-birthday2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroBirthdayComponent,
    HeroBirthday2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
