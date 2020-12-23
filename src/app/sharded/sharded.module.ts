import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {MatDividerModule  } from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    MatSlideToggleModule,
    MatTooltipModule
  ]
})
export class ShardedModule { }
