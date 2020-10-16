import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Route, Router, RouterModule } from '@angular/router';
import { ModalNewComponent } from './modal-new/modal-new.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const router: Route[] = [

];

@NgModule({
  declarations: [
    AppComponent,
    ModalNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
