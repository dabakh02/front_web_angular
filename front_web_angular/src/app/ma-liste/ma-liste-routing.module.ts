import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaListeComponent } from './ma-liste.component';

const routes: Routes = [{ path: '', component: MaListeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaListeRoutingModule { }
