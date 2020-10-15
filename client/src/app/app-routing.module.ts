import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActuatorComponent } from './actuator/actuator.component';
import { SensorComponent } from './sensor/sensor.component';
import { ModalNewComponent } from './modal-new/modal-new.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'actuator', component: ActuatorComponent },
  { path: 'sensor', component: SensorComponent },
  { path: 'new', component: ModalNewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
