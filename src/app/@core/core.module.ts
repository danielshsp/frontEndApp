import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptorService} from '../pages/auth/services/jwt-interceptor.service';
import {ErrorInterceptorService} from '../pages/auth/services/error-interceptor.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ]
})
export class CoreModule { }
