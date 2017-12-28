import { Component, OnInit, Input } from '@angular/core';
import {QuestionSubmitService} from '../../service/question-submit-service'

@Component({
  selector: 'app-fillintheblank',
  templateUrl: './fillintheblank.component.html',
  styleUrls: ['./fillintheblank.component.scss']
})
export class FillintheblankComponent implements OnInit {

  constructor(private qservice : QuestionSubmitService) { }
  @Input() content: any;
  mymodel = undefined
  @Input() index:any
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }
   onOptionChanged(newValue){
    console.log("changeing", newValue)
    
    let choices = this.question['choices'];
    //this.mymodel = newValue;
    if(choices[0]['answer'] === newValue){
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": true});
    }
    else{
      this.qservice.changeMessage({"content" : this.content, "index":this.index , "correct": false});
    }
  }

}
