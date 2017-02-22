import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilLoeschenComponent } from './profil-loeschen/profil-loeschen.component';
import { LoginComponent } from './login/login.component';
import { TooltipComponent } from './tooltip/tooltip.component';

import { KompetenzComponent } from './kompetenz/kompetenz.component';
import { ProfilBildComponent } from './profil-bild/profil-bild.component';
import { PasswordComponent } from './password/password.component';
import { ProfilUpdateComponent } from './profil-lupdate/profil-lupdate.component';
import { IndexComponent } from './index/index.component';

import { RouteModule } from './route/route.module';

import {NgbModule, NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {  TooltipModule  } from '../../node_modules/ng-bootstrap';
import { CheckKlasseComponent } from './check-klasse/check-klasse.component';

import { ProfilAendernComponent } from './profil-aendern/profil-aendern.component';
import { AendernPasswortComponent } from './aendern-passwort/aendern-passwort.component';
import { CheckSchuleComponent } from './check-schule/check-schule.component';
import { ErsteSeiteComponent } from './erste-seite/erste-seite.component';
import { MessageSuccessComponent } from './message-success/message-success.component';
import { MessageWarningComponent } from './message-warning/message-warning.component';
import { CheckpageComponent } from './checkpage/checkpage.component';
import { TextbubbleComponent } from './textbubble/textbubble.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilLoeschenComponent,
    AppComponent,
    LoginComponent,
    TooltipComponent,
    KompetenzComponent,
    ProfilBildComponent,
    PasswordComponent,
    ProfilUpdateComponent,
    IndexComponent,
    CheckKlasseComponent,
    ProfilAendernComponent,
    AendernPasswortComponent,
    CheckSchuleComponent,
    CheckSchuleComponent,
    ErsteSeiteComponent,
    MessageSuccessComponent,
    MessageWarningComponent,
    CheckpageComponent,
    TextbubbleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouteModule,
    FormsModule,
    ReactiveFormsModule,
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
