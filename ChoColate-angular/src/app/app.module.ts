import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { TooltipComponent } from './tooltip/tooltip.component';

import { KompetenzComponent } from './kompetenz/kompetenz.component';
import { ProfilBildComponent } from './profil-bild/profil-bild.component';
import { PasswordComponent } from './password/password.component';
import { ProfilUpdateComponent } from './profil-lupdate/profil-lupdate.component';
import { ProfileLoeschenComponent } from './profile-loeschen/profile-loeschen.component';
import { IndexComponent } from './index/index.component';

import { RouteModule } from './route/route.module';

// or
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


import {  TooltipModule  } from '../../node_modules/ng-bootstrap';
import { CheckKlasseComponent } from './check-klasse/check-klasse.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AppComponent,
    LoginComponent,
    TooltipComponent,
    KompetenzComponent,
    ProfilBildComponent,
    PasswordComponent,
    ProfilUpdateComponent,
    ProfileLoeschenComponent,
    IndexComponent,
    CheckKlasseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteModule,
    [NgbModule.forRoot()],
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log(TooltipModule);
  }

}
