import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {TevaTobraDashboardComponent} from './dashboard/teva-tobra-dashboard/teva-tobra-dashboard.component';
import {TevaTobraGridComponent} from './grid/teva-tobra-grid/teva-tobra-grid.component';
import {EppenTobraDashboardComponent} from './dashboard/eppen-tobra-dashboard/eppen-tobra-dashboard.component';
import {EppenTobraGridComponent} from './grid/eppen-tobra-grid/eppen-tobra-grid.component';
import {AuthGuardService} from './auth/services/auth-guard.service';
import {RoleGuardService} from './auth/services/role-guard.service';


const routes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children: [
        {
          path: 'general',
          loadChildren: () => import('./general/general.module')
            .then(m => m.GeneralModule),
        },
        {
          path: 'teva/dashboard',
          component: TevaTobraDashboardComponent,
          canActivate: [AuthGuardService],
        },
        {
          path: 'teva/grid',
          component: TevaTobraGridComponent,
          canActivate: [RoleGuardService],
          data: {
            role: ['ROLE_ADMIN']
          }
        },
        {
          path: 'eppen/dashboard',
          component: EppenTobraDashboardComponent,
        },
        {
          path: 'eppen/grid',
          component: EppenTobraGridComponent,
        },
        {
          path: 'auth',
          loadChildren: () => import('./auth/auth.module')
            .then(m => m.AuthModule),
        },
      ],
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
