import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;
  beschreibung: String = `Aus Sicherheitsgründen muss das Passwort mindestens 7-stellig sein sowie einen
                Groß-buchstaben, eine Ziffer und ein Sonderzeichen enthalten`;
  version: String = `edition 2016 dark night blue 1.0`;

  constructor(){}

  ngOnInit() {}

  checkPassword( input: String){
    let reg : any = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}';
    return reg.test( input );
  }

  checkUsername( input: String ){
    return input.length > 0;
  }

  onHover(el: any) {
    console.log( el );
  }

  login(){
    console.log("LOGIN");
    console.log(this.username);
    console.log(this.password);
  }

}

export class LoginModel {
  username: String;
  password: String;
}
