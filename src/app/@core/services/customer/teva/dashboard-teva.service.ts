import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FindStateByBatchId, State} from '../../../dto/customer/teva/state';
import {Apollo} from 'apollo-angular';
import {findStateByBatchIdQuery} from '../../../dto/customer/teva/state-queryql';
import {User} from '../../../dto/user/user';

@Injectable({
  providedIn: 'root'
})
export class DashboardTevaService {

  constructor(private apollo: Apollo) { }

  findStateByBatchId(page: number, size: number, sort: string, order: string, batchId: string ): Observable<FindStateByBatchId> {
    return this.apollo
      .query<FindStateByBatchId>({ query: findStateByBatchIdQuery, variables: {page, size, sort, order, batchId }})
      .pipe(
        map(result => result.data)
      , catchError((err) => this.handlerError(err))
      );

  }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error occurred retrieving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
