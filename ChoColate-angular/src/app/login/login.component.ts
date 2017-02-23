import {Component, OnInit, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import {Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {NgbTooltip, NgbTooltipConfig} from "@ng-bootstrap/ng-bootstrap";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from "@angular/router";
import {LocalStorageService} from 'ng2-webstorage';
import {UserService} from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl;

  private passwordValidator = [
    Validators.required,
    Validators.minLength(7)
  ];
  private emailValidator = [
    Validators.required,
    Validators.minLength(4)
  ];

  @ViewChild('t') public tooltip: NgbTooltip;
  @ViewChild('content') public messageError: any;

  message: String = `Aus Sicherheitsgründen muss das Passwort mindestens 7-stellig sein sowie einen
                Groß-buchstaben, eine Ziffer und ein Sonderzeichen enthalten`;
  version: String = `edition 2016 dark night blue 1.0`;

  constructor(private formBuilder: FormBuilder, private config: NgbTooltipConfig, private modalService: NgbModal
  , private router: Router, private userService: UserService, private localStorage: LocalStorageService){
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
  }

  onLoseFocus() {
    this.tooltip.open();
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


  login(){
    if( this.form.valid ){
      this.userService.login(this.emailInput.value, this.passwordInput.value).subscribe(
        isLoggedIn => {
          console.log(this.localStorage.retrieve('token'));
          console.log( isLoggedIn );
          if(isLoggedIn) {
            this.router.navigateByUrl('/app');
            console.log(this.localStorage.retrieve('token'));
          }
          else{
              this.modalService.open(this.messageError, { windowClass: 'error-modal' });
          }
        });
    }
    if(this.passwordInput.invalid){
      this.modalService.open(this.messageError, { windowClass: 'error-modal' });
    }

  }
}

