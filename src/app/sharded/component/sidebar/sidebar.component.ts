import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../@core/services/auth.service';
import decode from 'jwt-decode';
import {JwtResponse} from '../../../@core/dto/user/jwt-response';
import {delay} from 'rxjs/operators';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  Jwt: JwtResponse;
  imageName = '../assets/vayu.jpg';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getIsLogged().pipe(delay(500)).subscribe((res) => {
      if (res){
        const token = this.authService.getToken();
        const company = this.authService.getCompany();
        if (token){
          this.Jwt = decode(token);
          if (company === 'vayusense') {
            this.imageName = '../assets/vayu.jpg';

          }else if (company === 'teva'){
            this.imageName = '../assets/teva.png';

          }else if (company === 'eppen'){
            this.imageName = '../assets/eppen.png';
          }
        }
      }
    });
  }

}
