import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-singleselectradiobutton',
  templateUrl: './singleselectradiobutton.component.html',
  styleUrls: ['./singleselectradiobutton.component.scss']
})
export class SingleselectradiobuttonComponent implements OnInit {

  constructor() { }
  @Input() content: any;
  question : any 
  ngOnInit() {
    this.question = this.content['detail'];
    console.log("question", this.question);
  }

  onOptionChanged(value:string, index:number){
    
    //jQuery('#TruefalsedropdownComponent').text(value)
    let choices = this.question['choices'];
    console.log(this.question)
    // if(choices[index]['isCorrect'] === true){
    //   // this.isCorrect = 'correct'
    //   // this.submitAnswerEvent.emit({"isCorrect" : 'correct'});
    //   // this.selectAnswer(index ,this.current_slide ,1)
    // }
    // else{
    //   // this.isCorrect = 'incorrect';
    //   // this.submitAnswerEvent.emit({"isCorrect" : 'incorrect'});
    //   // this.selectAnswer(index ,this.current_slide , 0)
    // }
  }
  getID(id, i){
    return id+i;
  }

}
