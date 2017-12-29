import { Component, OnInit, Input } from '@angular/core';
import * as jQuery from 'jquery';
import {QuestionSubmitService} from '../../service/question-submit-service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  constructor( qservice:QuestionSubmitService) { }
  @Input() content: any;
  question : any;
  @Input() index:any 
  ngOnInit() {
  }
  

}

