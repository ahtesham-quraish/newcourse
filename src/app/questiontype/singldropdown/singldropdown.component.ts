import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-singldropdown',
  templateUrl: './singldropdown.component.html',
  styleUrls: ['./singldropdown.component.scss']
})
export class SingldropdownComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  @Input() index : any;
  ngOnInit() {
  }

}
