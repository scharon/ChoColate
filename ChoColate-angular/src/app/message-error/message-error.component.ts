import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./message-error.component.css']
})
export class MessageErrorComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit(){
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'error-modal' }).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    return reason;
  }
}
