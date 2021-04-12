import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { AuthenticationService } from './services/authentication.service';
import { FilmService } from './services/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNav : boolean;
  langue: string
  constructor(
   public authenticateService : AuthenticationService,
   public route : Router,
   public httpClient: HttpClient,
   private translate: TranslateService,
  private permissionsService: NgxPermissionsService
  ){
    this.translate.setDefaultLang('fr');
    if(sessionStorage.getItem("userRole")){
      const role = sessionStorage.getItem("userRole").split(",");
      this.permissionsService.loadPermissions(role);
    }
  }
 logout(){
   this.authenticateService.logout()
 }

 onChangeLanguage(value: any){
   //console.debug(value)
   this.translate.setDefaultLang(value)
 }

}
