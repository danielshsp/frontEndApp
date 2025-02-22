import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TevaTobraGridComponent} from './teva-tobra-grid/teva-tobra-grid.component';
import {RoleGuardService} from '../auth/services/role-guard.service';
import {EppenTobraGridComponent} from './eppen-tobra-grid/eppen-tobra-grid.component';
import {UserComponent} from './users/user/user.component';
import {AdminComponent} from './users/admin/admin.component';

const routes: Routes = [
  {
    path: 'teva',
    component: TevaTobraGridComponent,
    canActivate: [RoleGuardService],
    data: {
      role: ['ROLE_ADMIN']
    }
  },
  {
    path: 'eppen',
    component: EppenTobraGridComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
