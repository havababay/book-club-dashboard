import { Component, VERSION } from '@angular/core';
import { ChartType, Row } from 'angular-google-charts';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  // pie
  pType = ChartType.PieChart;
  pCols = ['Value', 'Count'];
  pOpts = {
    legend: 'none',
  };
  pData = [
    ['Value1', 1],
    ['Value2', 2],
    ['Value3', 3],
  ];

  type1 = 'ColumnChart';

  // Bar chart
  bType = ChartType.ColumnChart;
  bData = [
    ['other', 16, 'color: rgb(143, 27, 0)', '$6'],
    ['Architect', 3, 'color: rgb(143, 27, 0)', 3],
    ['Business', 2, 'color: rgb(143, 27, 0)', 2],
    ['Project', 5, 'color: rgb(143, 27, 0)', 4],
    ['developer', 9, 'color: rgb(143, 27, 0)', 4],
  ];
  bColumnNames = ['Year', 'value', { role: 'style' }, { role: 'annotation' }];
  bOptions = {
    title: '',
    /*'width':400,*/ height: 200,
    tooltip: {
      // isHtml: false,
      // trigger: "focus",
      textStyle: { color: 'blue', fontName: 'Tahoma', fontSize: '15' },
    },
    //                        slices: [{color: '0cac64'}, {color: 'e9ad2f'}, {color: '1f6882'},  {color: 'ff4d4d'}, {color: '9e70ff'}],
    labels: 'none',
    pieSliceText: 'none',
    pieSliceTextStyle: { color: 'red', fontSize: 9, display: 'none' },
    slices: [
      { color: '3eafe0' },
      { color: 'bd6a67' },
      { color: 'b9b262' },
      { color: '6abf7e' },
      { color: '6c95b7' },
    ],
    // chartArea: { top: 10, left: 20, width: "70%", height: "75%" },
    is3D: false /*sliceVisibilityThreshold: 0,*/,
    fontSize: 9,
    legend: 'dsd',
  };
}
