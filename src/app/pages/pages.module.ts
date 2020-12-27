import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ShardedModule } from '../sharded/sharded.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShardedModule,
    MatSidenavModule,
    DashboardModule,
    MatCardModule,
    MatDividerModule,
  ],
  providers: [
  ]
})
export class PagesModule { }
