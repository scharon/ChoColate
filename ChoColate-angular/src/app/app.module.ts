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
import { IndexComponent } from './index/index.component';

import { RouteModule } from './route/route.module';
import { Client } from './client';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

import {  TooltipModule  } from '../../node_modules/ng-bootstrap';
import { CheckKlasseComponent } from './check-klasse/check-klasse.component';

import { ProfilAendernComponent } from './profil-aendern/profil-aendern.component';
import { AendernPasswortComponent } from './aendern-passwort/aendern-passwort.component';
import { MessageSuccessComponent } from './message-success/message-success.component';
import { MessageWarningComponent } from './message-warning/message-warning.component';
import { CheckpageComponent } from './checkpage/checkpage.component';
import { TextbubbleComponent } from './textbubble/textbubble.component';
import {UserService} from './user.service';
import {Ng2Webstorage} from 'ng2-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilLoeschenComponent,
    AppComponent,
    LoginComponent,
    TooltipComponent,
    KompetenzComponent,
    IndexComponent,
    CheckKlasseComponent,
    ProfilAendernComponent,
    AendernPasswortComponent,
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
    Ng2Webstorage,
    TooltipModule
  ],
  providers: [UserService, Client],
  bootstrap: [AppComponent]
})
export class AppModule {}
