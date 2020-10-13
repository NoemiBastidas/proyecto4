import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SensorComponent } from './sensor/sensor.component';
import { ActuatorComponent } from './actuator/actuator.component';

import { Route, Router, RouterModule } from '@angular/router';
const router: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'actuator', component: ActuatorComponent },
  { path: 'sensor', component: SensorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SensorComponent,
    ActuatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(router),
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
