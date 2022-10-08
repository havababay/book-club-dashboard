import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import {
  mergeMap,
  map,
  catchError,
  tap,
  switchMap,
  delay,
} from 'rxjs/operators';
import { DashboardMetricsService } from '../services/dashboard_metrics.service';
import {
  fetchReadsByAgPending,
  fetchReadsByAgeSuccess,
  fetchReadsByAgeError,
} from './actions';
import { of } from 'rxjs';

@Injectable()
export class ReadsByAgeEffect {
 
  getMockDataEffect11$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchReadsByAgPending),
      tap(() => {
        console.log('new fetchReadsByAge occurred in queue');
      }),
      switchMap((action) => {
        console.log('new fetchReadsByAge running');
        return this.service.fetchReadsByAge(action.filters).pipe(
          delay(3000),
          map((res) => fetchReadsByAgeSuccess({ data: res })),
          catchError((error) => of(fetchReadsByAgeError({ error: error }))),
          tap(() => {
            console.log('fetchReadsByAge Finished');
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions<Action>,
    private service: DashboardMetricsService
  ) {
    console.log('user effects initialized');
  }
}
