import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { FiltersPanelComponent } from './filters/filters-panel/filters-panel.component';
import {MatNativeDateModule} from '@angular/material/core';
import { GoogleChartsModule } from 'angular-google-charts';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    MaterialModule,
    MatNativeDateModule,
  ],
  declarations: [AppComponent, FiltersPanelComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
