import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';
import { GeneralRoutingModule } from './general-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ContactComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ]
})
export class GeneralModule { }
