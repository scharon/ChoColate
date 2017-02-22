import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router ) {
  }

  ngOnInit() {
  }

  verlassen() : void {
    //TODO Auslogen bzw. delete token
    this.router.navigateByUrl('');
  }

  dummy(): void {
     console.log("Weisst du nicht was du machen soll?");
  }

  so_geht = 'http://www.check-lehrerzimmer.com/hilfe/erste-schritte/';
  video_tutorial = 'http://www.check-lehrerzimmer.com/tutorial/';
  faq = 'http://www.check-lehrerzimmer.com/faq/'
  kontakt = 'http://www.check-lehrerzimmer.com/contact/'
  openWindow( url : any) {
    window.open(url);
  }


}
