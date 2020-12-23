import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from '../../../@core/services/auth.service';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {
    return this.auth.getIsLogged().pipe(
        take(1),
        map(loggedIn =>
             loggedIn ? true : this.router.parseUrl('/auth/login') )
      );
  }
}
