import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent
  ],
  imports: [
    AuthRoutingModule,
    RouterModule,
    CommonModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
  ]
})
export class AuthModule { }
