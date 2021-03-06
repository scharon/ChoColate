import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfilAendernComponent } from '../profil-aendern/profil-aendern.component';
import { ProfilLoeschenComponent } from '../profil-loeschen/profil-loeschen.component';
import { LoginComponent } from '../login/login.component';
import { CheckKlasseComponent } from '../check-klasse/check-klasse.component';
import { AendernPasswortComponent } from '../aendern-passwort/aendern-passwort.component';
import { CheckpageComponent } from '../checkpage/checkpage.component';
import { TextbubbleComponent } from '../textbubble/textbubble.component';
import { CheckschuleComponent } from '../checkschule/checkschule.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent},
  { path: 'app',  component: NavbarComponent,
    children: [
      { path: '', redirectTo: 'checkKlasse', pathMatch: 'full'},
      { path: 'profileUpdate', component: ProfilAendernComponent},
      { path: 'checkKlasse', component: CheckKlasseComponent},
      { path: 'passwordAndern', component: AendernPasswortComponent},
      { path: 'profileLoeschen', component: ProfilLoeschenComponent}
    ]
  },

  { path: 'schule', component: CheckschuleComponent },
  { path: 'profileUpdate', component: ProfilAendernComponent },
  { path: 'profileLoeschen', component: ProfilLoeschenComponent },
  { path: 'check-klasse', component: CheckKlasseComponent },
  { path: 'password-change', component: AendernPasswortComponent },
  { path: 'checkpage', component: CheckpageComponent},
  { path: 'text', component: TextbubbleComponent}
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteModule { }
