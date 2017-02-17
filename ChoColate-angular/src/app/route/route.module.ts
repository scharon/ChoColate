import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ProfilAendernComponent } from '../profil-aendern/profil-aendern.component';
import { ProfileLoeschenComponent } from '../profile-loeschen/profile-loeschen.component';
import { LoginComponent } from '../login/login.component';
import { CheckKlasseComponent } from '../check-klasse/check-klasse.component';
import { AendernPasswortComponent } from '../aendern-passwort/aendern-passwort.component';
import { CheckSchuleComponent } from '../check-schule/check-schule.component';
import { ErsteSeiteComponent } from '../erste-seite/erste-seite.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent  },
  { path: 'login',  component: LoginComponent  },
  { path: 'profileUpdate', component: ProfilAendernComponent },
  { path: 'profileLoeschen', component: ProfileLoeschenComponent },
  { path: 'check-klasse', component: CheckKlasseComponent },
  { path: 'password-change', component: AendernPasswortComponent },
  { path: 'check-schule' , component: CheckSchuleComponent},
  { path: 'erste-seite' , component: ErsteSeiteComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteModule { }
