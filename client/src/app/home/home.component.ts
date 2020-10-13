import { ActuatorService } from './../services/actuator.service';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private actuatorService: ActuatorService, private httpClient: HttpClientModule) { }

  ngOnInit(): void {
  }

}
