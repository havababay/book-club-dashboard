import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { FiltersPanelComponent } from './filters/filters-panel/filters-panel.component';
import { GenresChartComponent } from './genres-chart/genres-chart.component';
import { NewMembersOverTimeComponent } from './new-members-over-time/new-members-over-time.component';
import { RetentionOverTimeComponent } from './retention-over-time/retention-over-time.component';
import { TopBooksComponent } from './top-books/top-books.component';

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
  declarations: [
    AppComponent,
    FiltersPanelComponent,
    GenresChartComponent,
    NewMembersOverTimeComponent,
    RetentionOverTimeComponent,
    TopBooksComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
