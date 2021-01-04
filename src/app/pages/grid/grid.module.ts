import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import {UsersComponent} from './users/users.component';
import {EppenTobraGridComponent} from './eppen-tobra-grid/eppen-tobra-grid.component';
import {TevaTobraGridComponent} from './teva-tobra-grid/teva-tobra-grid.component';
import {AdminComponent} from './users/admin/admin.component';
import {UserComponent} from './users/user/user.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    UsersComponent,
    EppenTobraGridComponent,
    TevaTobraGridComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class GridModule { }

