import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

const routes: Routes = [
  { path: 'acceuil', loadChildren: () => import('./acceuil/acceuil.module').then(m => m.AcceuilModule) },
  { path: 'series', loadChildren: () => import('./series/series.module').then(m => m.SeriesModule) },
  { path: 'films', loadChildren: () => import('./films/films.module').then(m => m.FilmsModule) },
  { path: 'movie/:id',component:MovieDetailsComponent},
  { path: 'nouveautes', loadChildren: () => import('./nouveautes/nouveautes.module').then(m => m.NouveautesModule) },
  { path: 'MaListe', loadChildren: () => import('./ma-liste/ma-liste.module').then(m => m.MaListeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
