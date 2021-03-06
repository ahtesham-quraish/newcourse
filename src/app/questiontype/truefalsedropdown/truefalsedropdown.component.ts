import { Component, OnInit, Input } from '@angular/core';
import * as jQuery from 'jquery';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-truefalsedropdown',
  templateUrl: './truefalsedropdown.component.html',
  styleUrls: ['./truefalsedropdown.component.scss']
})
export class TruefalsedropdownComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  @Input() content: any;
  question : any;
  @Input() index:any 
  ngOnInit() {
    this.question = this.content['detail'];
  }

   onOptionChanged(value:string, index:number){
    
    jQuery('#TruefalsedropdownComponent').text(value)
    let choices = this.question['choices'];
    if(choices[index]['isCorrect'] === true){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
  }

}
