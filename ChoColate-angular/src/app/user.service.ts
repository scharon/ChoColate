import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import {LocalStorageService} from 'ng2-webstorage';


@Injectable()
export class UserService {
  private loggedIn = false;

  constructor(private http: Http, private storage: LocalStorageService ) {
  }

  login(username, password) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(
        '/api/V1/login',
        JSON.stringify({ username : username, password : password }),
        { headers }
      )
      .map(res => res.json())
      .map((res, err) => {
        console.log(res.token);
        console.log(res.err);
        if (!res.err) {
          this.storage.store('token', res.token);
          this.loggedIn = true;
        }

        return this.isLoggedIn();
      });
  }

  logout() {
    window.localStorage.removeItem('token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  getToken(): any {
    return this.storage.retrieve('token');
  }

}
