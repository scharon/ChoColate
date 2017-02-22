import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-success',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './message-success.component.html',
  styleUrls: ['./message-success.component.css']
})
export class MessageSuccessComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(){
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'success-modal' }).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    return reason;
  }

}
