import {Component, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-message-warning',
  templateUrl: './message-warning.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./message-warning.component.css']
})
export class MessageWarningComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit(){
  }

  ngOnDestroy(){
    //this.subscription.unsubscribe();
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'warning-modal' }).result.then((result) => {
    }, (reason) => {
    });
  }

  private getDismissReason(reason: any): string {
    return reason;
  }

}
