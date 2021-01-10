import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptorService} from '../pages/auth/services/jwt-interceptor.service';
import {ErrorInterceptorService} from '../pages/auth/services/error-interceptor.service';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpLinkModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true }
  ]
})
export class CoreModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    apollo.create({ link: httpLink.create({uri: 'http://localhost:8085/api/v1/backend/graphql' }), cache: new InMemoryCache() });
  }
}
