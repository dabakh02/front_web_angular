import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcceuilRoutingModule } from './acceuil-routing.module';
import { AcceuilComponent } from './acceuil.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AcceuilComponent,
  ],
  imports: [
    CommonModule,
    AcceuilRoutingModule,
    RouterModule
  ],
  exports: [
  ]
})
export class AcceuilModule { }
