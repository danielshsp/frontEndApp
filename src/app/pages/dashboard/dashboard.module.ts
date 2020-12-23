import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { TevaTobraDashboardComponent } from './teva-tobra-dashboard/teva-tobra-dashboard.component';
import { EppenTobraDashboardComponent } from './eppen-tobra-dashboard/eppen-tobra-dashboard.component';
import { TevaUnitchartComponent } from './teva-tobra-dashboard/unitchart/unitchart.component';
import { EppenUnitchartComponent } from './eppen-tobra-dashboard/unitchart/unitchart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {TevaCardwidgetComponent} from './teva-tobra-dashboard/cardwidget/cardwidget.component';
import {EppenCardwidgetComponent} from './eppen-tobra-dashboard/cardwidget/cardwidget.component';
import {MatIconModule} from '@angular/material/icon';
import {TevaPieComponent} from './teva-tobra-dashboard/pie/pie.component';
import {EppenPieComponent} from './eppen-tobra-dashboard/pie/pie.component';


@NgModule({
  declarations: [
    TevaTobraDashboardComponent,
    EppenTobraDashboardComponent,
    TevaUnitchartComponent,
    EppenUnitchartComponent,
    EppenCardwidgetComponent,
    TevaCardwidgetComponent,
    EppenPieComponent,
    TevaPieComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    HighchartsChartModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule
  ]
})
export class DashboardModule { }
