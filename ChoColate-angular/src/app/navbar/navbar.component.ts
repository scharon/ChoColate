import { Component, OnInit, Output } from '@angular/core';
import {Router} from "@angular/router";
import {Client} from '../client';
import {UserService} from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  userInfo = {};

  constructor(private router: Router, private userService: UserService, private client: Client) {
    this.initData();
  }


  initData(): void {
    this.client.getUserInfos()
    .subscribe(userInfo => {
      this.userInfo = userInfo;
      console.log(userInfo);
    });
  }

  ngOnInit() {
  }

  verlassen(): void {
    this.userService.logout();
    this.router.navigateByUrl('');
  }

  dummy(): void {
     console.log("Weisst du nicht was du machen soll?");
  }

  so_geht = 'http://www.check-lehrerzimmer.com/hilfe/erste-schritte/';
  video_tutorial= 'http://www.check-lehrerzimmer.com/tutorial/';
  faq = 'http://www.check-lehrerzimmer.com/faq/';
  kontakt = 'http://www.check-lehrerzimmer.com/contact/';
  openWindow(url: any) {
    window.open(url);
  }
}
