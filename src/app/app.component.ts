import { Component, VERSION } from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;


}
