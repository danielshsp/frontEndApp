import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {TevaTobraDashboardComponent} from './dashboard/teva-tobra-dashboard/teva-tobra-dashboard.component';
import {EppenTobraDashboardComponent} from './dashboard/eppen-tobra-dashboard/eppen-tobra-dashboard.component';
import {AuthGuardService} from './auth/services/auth-guard.service';


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
          path: 'grid',
          loadChildren: () => import('./grid/grid.module')
            .then(m => m.GridModule),
        },
        {
          path: 'teva/dashboard',
          component: TevaTobraDashboardComponent,
          canActivate: [AuthGuardService],
        },
        {
          path: 'eppen/dashboard',
          component: EppenTobraDashboardComponent,
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
