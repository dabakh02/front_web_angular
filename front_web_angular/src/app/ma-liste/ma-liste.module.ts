import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaListeRoutingModule } from './ma-liste-routing.module';
import { MaListeComponent } from './ma-liste.component';


@NgModule({
  declarations: [
    MaListeComponent
  ],
  imports: [
    CommonModule,
    MaListeRoutingModule
  ]
})
export class MaListeModule { }
