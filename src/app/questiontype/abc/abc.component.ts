import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.scss']
})
export class AbcComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  @Input() index:any;
  question : any 
  ngOnInit() {
  }

}
