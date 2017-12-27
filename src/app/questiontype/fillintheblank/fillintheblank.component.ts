import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fillintheblank',
  templateUrl: './fillintheblank.component.html',
  styleUrls: ['./fillintheblank.component.scss']
})
export class FillintheblankComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  mymodel = ""
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
  }
  public onOptionChanged(newValue){
    
    let choices = this.question['choices'];
    // this.mymodel = newValue;
    // if(choices[0]['answer'] === newValue){
    //   this.isCorrect = 'correct'
    //   this.submitAnswerEvent.emit({"isCorrect" : 'correct'});
    //   this.selectAnswer(newValue ,this.current_slide , 1)
    // }
    // else{
    //   this.isCorrect = 'incorrect';
    //   this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
    //   this.selectAnswer(newValue ,this.current_slide , 0)
    // }
  }

}
