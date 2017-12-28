import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-singleselectradiobutton',
  templateUrl: './singleselectradiobutton.component.html',
  styleUrls: ['./singleselectradiobutton.component.scss']
})
export class SingleselectradiobuttonComponent implements OnInit {

  constructor(private qservice: QuestionSubmitService) { }
  @Input() content: any;
  question : any 
  @Input() index : any;
  ngOnInit() {
    this.question = this.content['detail'];
    console.log("question", this.question);
  }

  onOptionChanged(value:string, index:number){
    let choices = this.question['choices'];
    if(choices[index]['isCorrect'] == true){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
  }

}
