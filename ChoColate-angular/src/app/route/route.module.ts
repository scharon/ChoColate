import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { ProfilUpdateComponent } from '../profil-lupdate/profil-lupdate.component';
import { ProfileLoeschenComponent } from '../profile-loeschen/profile-loeschen.component';
import { LoginComponent } from '../login/login.component';
import { CheckKlasseComponent } from '../check-klasse/check-klasse.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index',  component: IndexComponent  },
  { path: 'login',  component: LoginComponent  },
  { path: 'profileUpdate', component: ProfilUpdateComponent },
  { path: 'profileLoeschen', component: ProfileLoeschenComponent },
  { path: 'check-klasse', component: CheckKlasseComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RouteModule { }
