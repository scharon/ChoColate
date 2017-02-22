import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NgbTooltip, NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
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

  @ViewChild('t') public tooltip: NgbTooltip;

  message: String = `Aus Sicherheitsgründen muss das Passwort mindestens 7-stellig sein sowie einen
                Groß-buchstaben, eine Ziffer und ein Sonderzeichen enthalten`;
  version: String = `edition 2016 dark night blue 1.0`;

  constructor(private formBuilder: FormBuilder, private config: NgbTooltipConfig){
    this.formBuilder = formBuilder;
    this.form = this.formBuilder.group({
      email : this.emailInput,
      password : this.passwordInput
    });
    this.initFormular();
    config.placement = 'right';
  }

  onFocus() {
    this.tooltip.open();
    console.log("on Focus");
  }

  onLoseFocus() {
    this.tooltip.open();
    console.log("on Focus");
  }

  ngOnInit() {}

  initFormular() {
    this.emailInput = new FormControl('', this.emailValidator );
    this.passwordInput = new FormControl('', this.passwordValidator );

    this.form = this.formBuilder.group({
      emailInput : this.emailInput,
      passwordInput : this.passwordInput
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
  }

}

