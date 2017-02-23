import { Component, OnInit, Input} from '@angular/core';
import { UserService } from '../user.service';
import { Client } from '../client';

@Component({
  selector: 'app-profil-loeschen',
  templateUrl: './profil-loeschen.component.html',
  styleUrls: ['./profil-loeschen.component.css']
})
export class ProfilLoeschenComponent implements OnInit {

  @Input() password = '';

  constructor(private userService: UserService, private client: Client) { }

  ngOnInit() {}

  deleteAccountAndLogout(): void {
    if (this.password !== '') {
      const username = this.userService.getCurrentUser();
      this.client.deletProfile(username, this.password);
      this.userService.logout();
    }
  }

}
