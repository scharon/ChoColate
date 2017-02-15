import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ProfilAendernComponent } from '../profil-aendern/profil-aendern.component';
import { ProfileLoeschenComponent } from '../profile-loeschen/profile-loeschen.component';
import { LoginComponent } from '../login/login.component';
import { CheckKlasseComponent } from '../check-klasse/check-klasse.component';
import { AendernPasswortComponent } from '../aendern-passwort/aendern-passwort.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: NavbarComponent  },
  { path: 'login',  component: LoginComponent  },
  { path: 'profileUpdate', component: ProfilAendernComponent },
  { path: 'profileLoeschen', component: ProfileLoeschenComponent },
  { path: 'check-klasse', component: CheckKlasseComponent },
  { path: 'password-change', component: AendernPasswortComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteModule { }
