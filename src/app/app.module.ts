import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { EditFilmComponent } from './components/edit-film/edit-film.component';
import { FilmsComponent } from './components/films/films.component';
import { LogingComponent } from './components/loging/loging.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { CommentairesComponent } from './components/commentaires/commentaires.component';
import { Interceptor } from './services/interceptor';
import { TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPermissionsModule } from 'ngx-permissions';



@NgModule({
  declarations: [
    AppComponent,
    AddFilmComponent,
    EditFilmComponent,
    FilmsComponent,
    LogingComponent,
    InscriptionComponent,
    CommentairesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //module de traduction
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (httpTranslateLoader),
        deps: [HttpClient]
      }
    }),
    //module de permission
    NgxPermissionsModule.forRoot(),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function requise pour traduire les pages
export function httpTranslateLoader(http: HttpClient){
  return new TranslateHttpLoader(http);
}
