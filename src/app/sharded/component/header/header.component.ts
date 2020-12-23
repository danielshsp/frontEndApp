import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ThemeService} from '../../../@core/services/theme.service';
import {Observable} from 'rxjs';
import {AuthService} from '../../../@core/services/auth.service';
import {delay} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  isDarkTheme: Observable<boolean>;
  isLogged: Observable<boolean>;

  constructor(private themeService: ThemeService, private authService: AuthService, private router: Router) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.isLogged = this.authService.getIsLogged().pipe(delay(500));
  }

  toggleDarkTheme(checked: boolean){
    this.themeService.setDarkTheme(checked);
  }

 toggleSideBar(){
   this.toggleSideBarForMe.emit();
   setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
        }, 300);
 }

  onLogOut(){
    this.authService.logout();
  }

  onLogIn(){
    this.authService.loginNevigate();
  }

  home(){
    this.router.navigate(['/general/home']);
  }
}
