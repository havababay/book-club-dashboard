import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { mergeMap, map, catchError, tap, } from 'rxjs/operators';
import { DashboardMetricsService } from '../services/dashboard_metrics.service';
import {
  fetchReadsByAgPending,
  fetchReadsByAgeSuccess,
  fetchReadsByAgeError,
} from './actions';
import { of } from 'rxjs';

@Injectable()
export class ReadsByAgeEffect {
  /*    readsByAgeEffect$: createEffect(
      () => this.actions$.pipe(
        ofType(fetchReadsByAgPending),
        switchMap(action =>
          this.service.fetchReadsByAge(action.filters)
              .pipe(
                  delay(3000),
                  map(fetchReadsByAgeSuccess),
                  catchError(err => of(fetchReadsByAgeError(err)))
              )
       )
      ),
    );*/
  /*
    effectName$ = createEffect(
      () => this.actions$.pipe(
        ofType(fetchReadsByAgPending),
        map(() => fetchReadsByAgeSuccess())
      )
    );*/
  /*
    getMockDataEffect$ = createEffect(
      () => this.actions$.pipe(
        ofType(fetchReadsByAgPending),
        tap(() => { console.log('new fetchReadsByAge occurred in queue') }),
        mergeMap((action) => {
          console.log('new fetchReadsByAge running')
          return this.service.fetchReadsByAge(filters : action.filters).pipe(
            map(res => fetchReadsByAgeSuccess({ data: res })),
            catchError(error => of(fetchReadsByAgeError({ error }))),
            tap(() => { console.log('fetchReadsByAge Finished') })
          )
        }
        )
      )
    );
*/
  getMockDataEffect11$ = createEffect(() =>
    this.actions$.pipe(ofType(fetchReadsByAgPending)),
    mergeMap((action) => {
      //console.log('new fetchReadsByAge running')
      return this.service.fetchReadsByAge(filters : action.filters).pipe(
        map(res => fetchReadsByAgeSuccess({ data: res })),
        catchError(error => of(fetchReadsByAgeError({ error : error }))),
        tap(() => { console.log('fetchReadsByAge Finished') })
      )
    }
  );

  /*Observable<Action> = this.actions$.pipe(
        ofType(FETCHING_USERS),
        switchMap(action =>
            this.http
                .get("https://jsonplaceholder.typicode.com/users")
                .pipe(
                    delay(3000),
                    map(usersFetchSuccessful),
                    catchError(err => of(fetchError(err)))
                )
         )
    );*/

  constructor(
    private actions$: Actions<Action>,
    private service: DashboardMetricsService
  ) {
    console.log('user effects initialized');
  }
}
