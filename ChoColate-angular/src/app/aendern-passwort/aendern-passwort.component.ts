import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../client';
import { UserService } from '../user.service';

@Component({
  selector: 'app-aendern-passwort',
  templateUrl: './aendern-passwort.component.html',
  styleUrls: ['./aendern-passwort.component.css']
})
export class AendernPasswortComponent implements OnInit {

  @Input() actualPassword = '';
  @Input() newPassword0 = '';
  @Input() newPassword1 = '';

  constructor(private client: Client, private userService: UserService) {}

  ngOnInit() {
  }

  password_andern(): void {
    console.log(this.actualPassword);
    console.log(this.newPassword0);
    console.log(this.newPassword1);

    if ((this.actualPassword !== '' && this.actualPassword.length > 6) && ( this.actualPassword !== this.newPassword0)
      && this.newPassword0 === this.newPassword1) {
        this.client.changePassword(this.userService.getCurrentUser(), this.newPassword0);
    }
  }

}
