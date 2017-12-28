import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class QuestionSubmitService {
  private messageSource = new BehaviorSubject<object>({});
  private endedMessageSource = new BehaviorSubject<object>({});
  currentMessage = this.messageSource.asObservable();
  endMessage = this.endedMessageSource.asObservable();

  constructor() { }
  changeMessage(message: object) {
    this.messageSource.next(message)
  }
  endedMessage(message: object) {
    this.endedMessageSource.next(message)
  }

}