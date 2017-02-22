import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MessageService {

  private message = new Subject<Message>();
  message$ = this.message.asObservable();

  constructor() { }

  sendMessage( message: Message ){
     this.message.next(message);
  }

}

export const MessageType = {
  SUCCESS : 'success',
  ERROR   : 'danger',
  INFO    : 'info',
  WARNING : 'warning',
}

export interface Message {

   /*
    *message to be display
    */
   message: string;

    /*
     *type of the message
     *according bootstrap display styles:
     *- success
     *- error
     *- default
     */
   messageType: any;

}
