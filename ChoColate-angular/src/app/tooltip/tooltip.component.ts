import { Component, OnInit, ElementRef, ViewChild, Renderer } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {

  message: String;
  visible : boolean;
  constructor( private render : Renderer)
  {
    this.message = "Message";
  }

  ngOnInit() {
  }

}
