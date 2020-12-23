import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from '../@core/services/theme.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  sideBarOpen = true;
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService, private router: Router) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void {
      this.router.navigate(['/general/home']);
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

