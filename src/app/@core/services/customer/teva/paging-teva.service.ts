import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {PageState} from '../../../dto/customer/teva/state';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PagingTevaService {
  private isPage$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  findAll(request: string): Observable<PageState> {
    const params = request;
    return this.http.get<PageState>(`http://localhost:8080/api/v1/backend/page/state${params}`)
      .pipe(
        map((pageState: PageState) => {
          this.isPage$.next(true);
          return pageState;
        }),
      catchError((err) => this.handlerError(err))
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

