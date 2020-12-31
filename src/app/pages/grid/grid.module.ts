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
import {SortableColumn, TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MatCardModule} from '@angular/material/card';


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
        TableModule,
        ButtonModule,
        CalendarModule,
        InputTextModule,
        MatCardModule,
    ]
})
export class GridModule { }
