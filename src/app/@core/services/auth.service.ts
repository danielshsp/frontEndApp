import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserAuth} from '../dto/user/user-auth';
import {JwtResponse} from '../dto/user/jwt-response';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private JWT = 'JWT';

  constructor(private http: HttpClient, private router: Router) {
      this.checkToken();
  }
  login(authData: UserAuth): Observable<JwtResponse> {
    return this.http
      .post<JwtResponse>('http://localhost:8080/auth/login', authData)
      .pipe(
        map((jwt: JwtResponse) => {
          this.saveToken(jwt);
          this.isLoggedIn$.next(true);
          return jwt;
        }),
        catchError((err) => this.handlerError(err))
      );
  }

  getIsLogged(): Observable<boolean> {
    return this.isLoggedIn$.asObservable();
  }

  getToken() {
    return sessionStorage.getItem(this.JWT);
  }
  getCompany() {
    return sessionStorage.getItem('company');
  }
  getProduct() {
    return sessionStorage.getItem('products');
  }

  saveToken(jwt: JwtResponse) {
    sessionStorage.setItem(this.JWT, jwt.token);
    sessionStorage.setItem('company', jwt.company);
    sessionStorage.setItem('product', JSON.stringify(jwt.products));
  }

  private checkToken(): void {
    const token = this.getToken();

    if (token) {
      const isExpired = helper.isTokenExpired(token);
      if (isExpired) {
        this.logout();
      } else {
        this.isLoggedIn$.next(true);
      }
    }
  }

  logout(): void {
    sessionStorage.removeItem('JWT');
    sessionStorage.removeItem('company');
    sessionStorage.removeItem('product');
    this.isLoggedIn$.next(false);
    this.router.navigate(['/auth/login']);
  }

  loginNevigate(): void {
    this.router.navigate(['/auth/login']);
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
