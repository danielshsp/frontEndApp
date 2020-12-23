import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import { AuthService } from '../../../@core/services/auth.service';
import decode from 'jwt-decode';
import {JwtResponse} from '../../../@core/dto/user/jwt-response';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  tokenPayload: JwtResponse;
  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>  {
    return this.auth.getIsLogged().pipe(
        take(1),
        map(loggedIn =>
          loggedIn ? this.checkRole(route) : this.router.parseUrl('/auth/login') )
      );
  }

  checkRole(route: ActivatedRouteSnapshot): boolean {
    const token = this.auth.getToken();
    if (token){
      this.tokenPayload = decode(token);
    }
    if ( route.data.role[0] !== this.tokenPayload.role[0] ) {
        this.router.navigate(['/auth/forbidden']);
        return false;
    }
    return true;
  }
}
