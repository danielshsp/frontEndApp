import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../@core/services/auth.service';
import {UserAuth} from '../../../@core/dto/user/user-auth';
import {Router} from '@angular/router';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit  {
  form: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.login(new UserAuth(this.form.username, this.form.pass)).pipe(take(1)).subscribe((res) => {
      if (res){
        alert(res);
        this.router.navigate(['/general/home']);
      }
    });
  }

}
