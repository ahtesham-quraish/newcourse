import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-singleselectdropdown',
  templateUrl: './singleselectdropdown.component.html',
  styleUrls: ['./singleselectdropdown.component.scss']
})
export class SingleselectdropdownComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  @Input() content: any;
  question : any 
  index :any
  ngOnInit() {
    this.question = this.content['detail'];
  }
   onOptionChanged(value:string, index:number){
    
    console.log(value, index);
    jQuery('#SingleselectdropdownComponent').text(value)
    let choices = this.question['choices'];
    if(choices[index]['isCorrect'] === true){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
     
    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
  }
}
