import { LogingComponent } from './components/loging/loging.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './components/films/films.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CommentairesComponent } from './components/commentaires/commentaires.component';
import { AuthenticationGuard } from './services/guard';

const routes: Routes = [

  {path: '', component: FilmsComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'addFilm', component: AddFilmComponent, canActivate : [AuthenticationGuard]},
  {path: 'editFilm/:id', component: EditFilmComponent, canActivate : [AuthenticationGuard]},
  {path: 'login', component: LogingComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'commentaires/:id', component: CommentairesComponent, canActivate : [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
