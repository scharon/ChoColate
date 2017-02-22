import {Component, OnInit, Input, Output} from '@angular/core';
import {toInteger} from "@ng-bootstrap/ng-bootstrap/util/util";

@Component({
  selector: 'app-textbubble',
  templateUrl: './textbubble.component.html',
  styleUrls: ['./textbubble.component.css']
})
export class TextbubbleComponent implements OnInit {

  constructor() {
  }

  /*
   * done =>
   * failed =>
   * todo =>
   */
  @Input() option : string = '';  //'done|failed|todo';
  @Input() chapter : string = ''; //'01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16';
  prefix = 'assets/img/images-master/images-master';

  @Output() filename = new String();

  filenames = {
    'done' : '/competenceDone.png',
    'failed' : '/competenceUndone.png',
    'todo' : '/educationalPlan-inactive'
  };

  ngOnInit() {
    this.initFileName();
    console.log(this.option)
    console.log(this.chapter)
    console.log(this.filename)
  }


  initFileName() {
    let suffix = this.filenames[this.option];
    if(this.option.trim()=="todo") {
      this.filename = this.prefix + suffix;
    }
    else {
      if( this.chapter != null   && +this.chapter > 0 && +this.chapter <=16) {
        this.filename = this.prefix + "/chapter" + this.chapter + "/" + suffix;
      }
    }
  }

}
