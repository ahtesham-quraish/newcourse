import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-truefalseradionbutton',
  templateUrl: './truefalseradionbutton.component.html',
  styleUrls: ['./truefalseradionbutton.component.scss']
})
export class TruefalseradionbuttonComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  @Input() content: any;
  @Input() index:any;
  question : any  
  ngOnInit() {
    this.question = this.content['detail'];
  }

   onOptionChanged( value:string, index){
    
    
    let choices = this.question['choices'];

    var correct_index = choices.findIndex(x => x.isCorrect == true);
    if(choices[index]['isCorrect'] === true){
       this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});

    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index, "correct": false});
    }
}

}
