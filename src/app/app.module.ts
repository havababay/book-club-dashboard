import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FiltersPanelComponent } from './filters/filters-panel/filters-panel.component';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GoogleChartsModule ],
  declarations: [ AppComponent, FiltersPanelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
