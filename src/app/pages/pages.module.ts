import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ShardedModule } from '../sharded/sharded.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersComponent } from './grid/users/users.component';
import { EppenTobraGridComponent } from './grid/eppen-tobra-grid/eppen-tobra-grid.component';
import { TevaTobraGridComponent } from './grid/teva-tobra-grid/teva-tobra-grid.component';
import { AdminComponent } from './grid/users/admin/admin.component';
import { UserComponent } from './grid/users/user/user.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    PagesComponent,
    UsersComponent,
    EppenTobraGridComponent,
    TevaTobraGridComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ShardedModule,
    MatSidenavModule,
    DashboardModule,
    MatCardModule,
    MatDividerModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
  ]
})
export class PagesModule { }
