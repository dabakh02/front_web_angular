import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveautesComponent } from './nouveautes.component';

const routes: Routes = [{ path: '', component: NouveautesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NouveautesRoutingModule { }
