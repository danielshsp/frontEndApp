import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {User} from '../dto/user/user';
import {catchError, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  constructor(private http: HttpClient) { }

  findByAdmin(request: string): Observable<User[]> {
    return this.http.get<User[]>(`http://localhost:8080/api/v1/user?${request}`)
      .pipe(
        map((user: User[]) => {
          return user;
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
