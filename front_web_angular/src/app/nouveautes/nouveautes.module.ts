import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NouveautesRoutingModule } from './nouveautes-routing.module';
import { NouveautesComponent } from './nouveautes.component';


@NgModule({
  declarations: [
    NouveautesComponent
  ],
  imports: [
    CommonModule,
    NouveautesRoutingModule
  ]
})
export class NouveautesModule { }
