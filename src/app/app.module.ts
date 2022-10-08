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
import { ReadsByAgeComponent } from './reads-by-age/reads-by-age.component';
import { AgeRangeFilterComponent } from './filters/age-range-filter/age-range-filter.component';
import { DateRangeFilterComponent } from './filters/date-range-filter/date-range-filter.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, fetchReadsByAgeReducer } from './state/reducers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule,
    MaterialModule,
    MatNativeDateModule,
    RouterModule.forRoot([]),
    StoreModule.forRoot({}), 
    StoreModule.forFeature('filtersState', reducers),
    StoreModule.forFeature('readsByAgeState', fetchReadsByAgeReducer),
  ],
  declarations: [
    AppComponent,
    FiltersPanelComponent,
    GenresChartComponent,
    NewMembersOverTimeComponent,
    RetentionOverTimeComponent,
    TopBooksComponent,
    ReadsByAgeComponent,
    AgeRangeFilterComponent,
    DateRangeFilterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
