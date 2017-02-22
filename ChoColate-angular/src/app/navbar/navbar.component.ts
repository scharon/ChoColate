import { Component, OnInit } from '@angular/core';
import {NgbPopoverConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  providers: [NgbPopoverConfig],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private config :  NgbPopoverConfig ) {
    this.config.triggers ='click';
  }

  ngOnInit() {
  }

}
