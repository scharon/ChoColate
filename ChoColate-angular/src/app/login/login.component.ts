import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email: String;
  @Input() password: String;

  form: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;
  private passwordValidator = [
    Validators.required,
    Validators.minLength(6)
  ];
  private emailValidator = [
    Validators.required,
    Validators.minLength(4)
  ];

  beschreibung: String = `Aus Sicherheitsgründen muss das Passwort mindestens 7-stellig sein sowie einen
                Groß-buchstaben, eine Ziffer und ein Sonderzeichen enthalten`;
  version: String = `edition 2016 dark night blue 1.0`;

  constructor(private formBuilder: FormBuilder){
    this.formBuilder = formBuilder;
    this.initFormular();
  }

  ngOnInit() {}

  initFormular() {
    this.emailInput = new FormControl('', this.emailValidator );
    this.passwordInput = new FormControl('', this.passwordValidator );

    this.form = this.formBuilder.group({
      email : this.emailInput,
      password : this.passwordInput
    });
  }

  checkPassword( input: String){
    let reg : any = '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}';
    return reg.test( input );
  }

  checkUsername( input: String ){
    return input.length > 0;
  }

  login(){
    console.log("LOGIN");
    console.log(this.email);
    console.log(this.password);
  }

}

