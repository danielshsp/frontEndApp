import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForbiddenComponent} from './forbidden/forbidden.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AuthRoutingModule {
}
