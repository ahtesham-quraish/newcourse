import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  content= {};
  @Input() index: any;
  question : any 
  ngOnInit() {
  }
  onOptionChanged(value:string, index:number){
    
  
  }

}
